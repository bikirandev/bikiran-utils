import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { IconUser } from "./icons/icons";
import style from "./style/ToolTipUserInfo.module.css";

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
    <div className={cn(style.toolTipParentComp, "parentComp")} ref={tooltipRef}>
      <div
        onClick={() => setShow(show === user?.id ? null : user?.id)}
        className={cn(style.imageDiv, "imageDiv")}
      >
        {user?.photoUrl ? (
          <ImageComponent
            src={user?.photoUrl}
            alt="user"
            width={0}
            height={0}
            sizes="100vw"
            className={cn(style.userImage, "userImage")}
          />
        ) : (
          <IconUser />
        )}
      </div>
      <button
        className={cn(
          style.btnRedirect,
          "btnRedirect",
          show === user?.id ? style.show : "show" // Show when active
        )}
        onClick={handleRedirectClick}
      >
        <div className={cn(style.showImg, "showImg")}>
          {user?.photoUrl ? (
            <ImageComponent
              src={user?.photoUrl}
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              className={cn(style.userImage, "userImage")}
            />
          ) : (
            <IconUser />
          )}
          <div>
            <div className={cn(style.displayName, "displayName")}>
              {user?.displayName || "-----"}
            </div>
            <div className={cn(style.email, "email")}>
              {user?.email || "-----"}
            </div>
          </div>
        </div>
        {/* Tooltip Arrow */}
        <div className={cn(style.tooltipArrow, "tooltipArrow")} />
      </button>
    </div>
  );
};

export default TooltipUserInfo;
