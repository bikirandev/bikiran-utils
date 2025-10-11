import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { IconArrow, IconInfo } from "./icons";
import styles from "./style/InfoTooltip.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  content: string;
  className?: string;
  children?: React.ReactNode;
  align?: "left" | "right" | "top" | "bottom";
  fillColor?: string;
  borderColor?: string;
  trigger?: "hover" | "click";
  disabled?: boolean;
  delay?: number;
  offset?: number;
};

type Position = {
  top: number;
  left: number;
  finalAlign: "left" | "right" | "top" | "bottom";
};

const InformationTooltip: FC<TProps> = ({
  children,
  content,
  className,
  align = "right",
  fillColor = "#FFF9DB",
  borderColor = "#FFE6BA",
  trigger = "hover",
  disabled = false,
  delay = 200,
  offset = 12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
    finalAlign: align,
  });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate optimal position based on viewport boundaries
  const calculatePosition = useCallback((): Position => {
    if (!triggerRef.current) return { top: 0, left: 0, finalAlign: align };

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = 224; // w-56 = 14rem = 224px

    // Try to get actual tooltip height if available, otherwise use estimate
    let tooltipHeight = 65; // default estimate
    if (tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      if (tooltipRect.height > 0) {
        tooltipHeight = tooltipRect.height;
      }
    }

    let finalAlign = align;
    let top = 0;
    let left = 0;

    // Calculate position based on preferred alignment
    switch (align) {
      case "right":
        left = triggerRect.right + offset;
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;

        // Check if tooltip would overflow viewport
        if (left + tooltipWidth > viewportWidth) {
          finalAlign = "left";
          left = triggerRect.left - tooltipWidth - offset;
        }
        break;

      case "left":
        left = triggerRect.left - tooltipWidth - offset;
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;

        if (left < 0) {
          finalAlign = "right";
          left = triggerRect.right + offset;
        }
        break;

      case "top":
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        top = triggerRect.top - tooltipHeight + offset / 2; // Reduce gap for closer positioning

        if (top < 0) {
          finalAlign = "bottom";
          top = triggerRect.bottom + offset;
        }
        break;

      case "bottom":
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        top = triggerRect.bottom + offset;

        if (top + tooltipHeight > viewportHeight) {
          finalAlign = "top";
          top = triggerRect.top - tooltipHeight - offset / 2; // Consistent closer positioning
        }
        break;
    }

    // Ensure tooltip doesn't overflow horizontally
    if (left < 0) left = 8;
    if (left + tooltipWidth > viewportWidth)
      left = viewportWidth - tooltipWidth - 8;

    // Ensure tooltip doesn't overflow vertically
    if (top < 0) top = 8;
    if (top + tooltipHeight > viewportHeight)
      top = viewportHeight - tooltipHeight - 8;

    return { top, left, finalAlign };
  }, [align, offset]);

  const showTooltip = useCallback(() => {
    if (disabled) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      () => {
        setPosition(calculatePosition());
        setIsVisible(true);
      },
      trigger === "hover" ? delay : 0
    );
  }, [disabled, calculatePosition, delay, trigger]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (trigger === "hover") {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    } else {
      setIsVisible(false);
    }
  }, [trigger]);

  const handleClick = useCallback(() => {
    if (disabled) return;

    if (trigger === "click") {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  }, [disabled, trigger, isVisible, showTooltip, hideTooltip]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === "click" &&
        isVisible &&
        triggerRef.current &&
        tooltipRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trigger, isVisible, hideTooltip]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVisible) {
        hideTooltip();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible, hideTooltip]);

  // Recalculate position on scroll/resize
  useEffect(() => {
    const handleReposition = () => {
      if (isVisible) {
        setPosition(calculatePosition());
      }
    };

    window.addEventListener("scroll", handleReposition, true);
    window.addEventListener("resize", handleReposition);

    return () => {
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
    };
  }, [isVisible, calculatePosition]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClass = cn(styles.tooltipPortal, className);

  const arrowClass = cn(
    styles.arrowPortal,
    styles[
      `arrow${
        position.finalAlign.charAt(0).toUpperCase() +
        position.finalAlign.slice(1)
      }`
    ]
  );

  const triggerProps = {
    ...(trigger === "hover" && {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      onFocus: showTooltip,
      onBlur: hideTooltip,
    }),
    ...(trigger === "click" && {
      onClick: handleClick,
    }),
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={cn(styles.wrapper, disabled && styles.disabled)}
        {...triggerProps}
        tabIndex={trigger === "click" ? 0 : undefined}
        role={trigger === "click" ? "button" : undefined}
        aria-describedby={isVisible ? "tooltip" : undefined}
      >
        {children ? children : <IconInfo />}
      </div>

      {isVisible &&
        !disabled &&
        createPortal(
          <div
            ref={tooltipRef}
            id="tooltip"
            role="tooltip"
            className={tooltipClass}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              backgroundColor: fillColor,
              borderColor: borderColor,
              borderWidth: "1px",
              color: "var(--color-primary)",
              zIndex: 9999,
            }}
            onMouseEnter={trigger === "hover" ? showTooltip : undefined}
            onMouseLeave={trigger === "hover" ? hideTooltip : undefined}
          >
            <span>{content}</span>
            <div className={arrowClass}>
              <IconArrow fillColor={fillColor} borderColor={borderColor} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default InformationTooltip;
