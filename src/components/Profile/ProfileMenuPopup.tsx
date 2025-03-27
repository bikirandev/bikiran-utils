import { FC } from "react";
import { CrossIcon } from "./icons";
import ProfileMenuList from "./ProfileMenuList";
import ProfileUserInformation from "./ProfileUserInformation";
import { getAccountUrl, getBikiranUrl } from "../../lib/utils/Env";
import { TAuthInfo } from "./authTypes";
import { cn } from "../../lib/utils/cn";
import style from "./style/ProfileMenuPopup.module.css";

type TProps = {
  show: boolean;
  authInfo: TAuthInfo;
  logout: () => void;
  closeClick: () => void;
  LinkComponent: any;
  ImageComponent: any;
};

type TTerm = {
  title: string;
  link: string;
};

const termsArr: TTerm[] = [
  {
    title: "Privacy Policy",
    link: `${getBikiranUrl()}/legal/privacy-policy/`,
  },
  {
    title: "Terms of Service",
    link: `${getBikiranUrl()}/legal/terms-of-service/`,
  },
];

const CloseBtn: FC<{ closeClick: () => void }> = ({ closeClick }) => {
  return (
    <button
      type="button"
      onClick={closeClick}
      className={cn("closeBtn", style.closeBtn)}
    >
      <CrossIcon />
    </button>
  );
};

const ProfileMenuPopup: FC<TProps> = ({
  show,
  authInfo,
  logout,
  closeClick,
  LinkComponent,
  ImageComponent,
}) => {
  if (!show) return null;
  return (
    <div className={cn(style.popupContainer, "popupContainer")}>
      <div className={cn("popupContent", style.popupContent)}>
        <div className={cn("popupTopSection", style.popupTopSection)}>
          <ProfileUserInformation
            auth={authInfo}
            logout={logout}
            ImageComponent={ImageComponent}
          />

          <div className={cn("manageLinkContainer", style.manageLinkContainer)}>
            <LinkComponent
              href={`${getAccountUrl()}/user/personal-info`}
              target="_blank"
              className={cn("manageLink", style.manageLink)}
            >
              Manage Your Bikiran Account
            </LinkComponent>
          </div>

          <ProfileMenuList LinkComponent={LinkComponent} />

          {/* Close button for mobile device only */}
          <CloseBtn closeClick={closeClick} />
        </div>

        {/* Terms and Conditions links */}
        <div className={cn("termsAndCondition", style.termsAndCondition)}>
          {termsArr?.map((item: TTerm, index: number) => (
            <div key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "termsAndConditionLinks",
                  style.termsAndConditionLinks
                )}
              >
                {item.title}
              </a>
              {index === 0 ? (
                <span className={cn("indexSpan", style.indexSpan)}>
                  &#8226;
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuPopup;
