import React, { FC } from "react";
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
};

const InformationTooltip: FC<TProps> = ({
  children,
  content,
  className,
  align = "right",
  fillColor = "#FFF9DB",
  borderColor = "#FFE6BA",
}) => {
  const tooltipClass = cn(
    styles.tooltipContent,
    align === "top"
      ? styles.topAlign
      : align === "bottom"
      ? styles.bottomAlign
      : align === "left"
      ? styles.leftAlign
      : styles.rightAlign,
    className
  );

  const arrowClass = cn(
    styles.arrow,
    align === "top"
      ? styles.arrowTop
      : align === "bottom"
      ? styles.arrowBottom
      : align === "left"
      ? styles.arrowLeft
      : styles.arrowRight
  );

  return (
    <div className={styles.wrapper}>
      {children ? children : <IconInfo />}
      <div
        className={tooltipClass}
        style={{
          backgroundColor: fillColor,
          borderColor: borderColor,
          borderWidth: "1px",
          color: "var(--color-primary)", // if you have text-primary color in css vars
        }}
      >
        <span>{content}</span>
      </div>
      <div className={arrowClass}>
        <IconArrow fillColor={fillColor} borderColor={borderColor} />
      </div>
    </div>
  );
};

export default InformationTooltip;
