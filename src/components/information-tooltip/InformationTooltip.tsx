import React, { FC } from "react";
import { cn } from "../../lib/utils/cn";

type TProps = {
  children: React.ReactNode;
  content: string;
  className?: string;
  align?: "left" | "right" | "top" | "bottom";
};

const InformationTooltip: FC<TProps> = ({
  children,
  content,
  className,
  align = "right",
}) => {
  const positionStyles = {
    left: align === "right" ? "100%" : align === "left" ? "auto" : "50%",
    right: align === "left" ? "100%" : "auto",
    top: align === "bottom" ? "100%" : align === "top" ? "auto" : "50%",
    bottom: align === "top" ? "100%" : "auto",
    transform:
      align === "top" || align === "bottom"
        ? "translateX(-50%)"
        : "translateY(-50%)",
  };

  const animationClasses = cn(
    align === "top"
      ? "origin-bottom scale-y-0 group-hover:scale-y-100"
      : align === "bottom"
      ? "origin-top scale-y-0 group-hover:scale-y-100"
      : align === "left"
      ? "origin-right scale-x-0 group-hover:scale-x-100"
      : "origin-left scale-x-0 group-hover:scale-x-100"
  );

  return (
    <div className="relative group my-auto cursor-pointer">
      {children}
      <div
        className={cn(
          "absolute bg-white border-primary-200 border text-sm text-primary shadow-md rounded-15 w-56 px-4 py-3 opacity-0 group-hover:opacity-100 transition-all z-10",
          animationClasses,
          className
        )}
        style={positionStyles}
      >
        {content}
      </div>
    </div>
  );
};

export default InformationTooltip;
