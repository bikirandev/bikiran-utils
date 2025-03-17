import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { IconUser } from "./icons/icons";

type TProps = {
  user: any;
  ImageComponent: any;
  redirectClick?: () => void;
};

const TooltipUserInfo: FC<TProps> = ({
  user,
  ImageComponent,
  redirectClick,
}) => {
  const [show, setShow] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleRedirectClick = () => {
    if (
      typeof redirectClick !== "undefined" &&
      typeof redirectClick === "function"
    ) {
      redirectClick();
    }
    return () => {};
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShow]);

  return (
    <div className="relative inline-block parentComp" ref={tooltipRef}>
      <div
        onClick={() => setShow(show === user?.id ? null : user?.id)}
        className={cn(
          "cursor-pointer imageDiv",
          user === null && "pointer-events-none"
        )}
      >
        {user?.photoUrl ? (
          <ImageComponent
            src={user?.photoUrl}
            alt="user"
            width={0}
            height={0}
            sizes="100vw"
            className="size-7 xl:size-10 rounded-full"
          />
        ) : (
          <IconUser />
        )}
      </div>
      <button
        className={cn(
          "absolute left-1/2 bottom-full mb-3 -translate-x-1/2 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none transition-all duration-200",
          "opacity-0 scale-95 pointer-events-none redirectBtn",
          show === user?.id && "opacity-100 scale-100 pointer-events-auto" // Show when active
        )}
        onClick={handleRedirectClick}
      >
        <div className="flex items-center gap-3 showImg">
          {user?.photoUrl ? (
            <ImageComponent
              src={user?.photoUrl}
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              className="size-7 xl:size-10 rounded-full"
            />
          ) : (
            <IconUser />
          )}
          <div>
            <div className="text-primary font-medium text-start displayNameComp">
              {user?.displayName || "-----"}
            </div>
            <div className="text-primary-500 text-start emailComp">
              {user?.email || "-----"}
            </div>
          </div>
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
      </button>
    </div>
  );
};

export default TooltipUserInfo;
