import { FC } from "react";
import Copy from "../../lib/utils/Copy";
import { cn } from "../../lib/utils/cn";
import { iconCopy, iconTick } from "./icon/icons";

const CopyWrapper: FC<{ content: any; className?: string }> = ({
  content,
  className,
}) => {
  const { copy, isCopied } = Copy();
  return (
    <button
      className={cn("flex items-center gap-1 group", className)}
      onClick={(ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        copy(content);
      }}
    >
      <div className="text-sm">{content}</div>
      {isCopied ? (
        <div>{iconTick()}</div>
      ) : (
        <div className="group-hover:block hidden">{iconCopy()}</div>
      )}
    </button>
  );
};

export default CopyWrapper;
