import React, { FC } from "react";
import { cn } from "../../lib/utils/cn";

type TProps = {
  children: React.ReactNode;
  content: string;
  className?: string;
};

const InformationTooltip: FC<TProps> = ({ children, content, className }) => {
  return (
    <div className="relative group my-auto cursor-pointer">
      {children}
      <div
        className={cn(
          "absolute left-8 translate-x-0 top-0 bg-white border-primary-200 border text-sm text-primary shadow-md rounded-15 w-56 px-4 py-3 scale-x-0 origin-left group-hover:opacity-100 group-hover:scale-x-100 transition-all z-10",
          className
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default InformationTooltip;
