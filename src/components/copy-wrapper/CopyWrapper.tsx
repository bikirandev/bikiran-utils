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
      className={cn(
        "flex text-sm items-center gap-1 group relative",
        className
      )}
      onClick={(ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        copy(content);
      }}
    >
      <div className="">{content}</div>
      {isCopied ? (
        <div className="absolute" style={{ right: "-5px" }}>
          {iconTick()}
        </div>
      ) : (
        <div
          className="hidden group-hover:block absolute"
          style={{ right: "-5px" }}
        >
          {iconCopy()}
        </div>
      )}
    </button>
  );
};

export default CopyWrapper;
