import React from "react";
import LoginBtn from "./LoginBtn";
import { LoadingRoundDottedIcon } from "./icons";
import { TAuthInfo } from "./authTypes";
import { cn } from "../../lib/utils/cn";
import style from "./style/ProfileView.module.css";

type TProfileView = {
  auth: TAuthInfo;
  loginUrl: string;
  onClick: () => void;
  ImageComponent: any;
  LinkComponent: any;
  AuthCompWrapper: any;
  windowWidth: number;
  SIZE_SM: number;
};

const ProfileView: React.FC<TProfileView> = ({
  auth,
  onClick,
  loginUrl,
  LinkComponent,
  ImageComponent,
  AuthCompWrapper,
  windowWidth,
  SIZE_SM,
}) => {
  return (
    <div className={cn("profileContainer", style.profileContainer)}>
      <AuthCompWrapper auth={auth}>
        <div
          className={cn("imageUserContainer", style.imageUserContainer)}
          onClick={onClick}
        >
          <ImageComponent
            src={auth.currentUser.photoUrl}
            alt="user_avatar"
            width={100}
            height={100}
            sizes="100vw"
            className={cn("imageUser", style.imageUser)}
          />

          {/* Notification Bullet point */}
          {/* <span className="size-2 bg-warning rounded-full absolute top-0 right-0 " /> */}
        </div>
        <LoginBtn
          loginUrl={loginUrl}
          SIZE_SM={SIZE_SM}
          windowWidth={windowWidth}
          LinkComponent={LinkComponent}
        />
        <LinkComponent
          href="#"
          type="button"
          className={cn("linkBtn", style.linkBtn)}
        >
          <LoadingRoundDottedIcon />
        </LinkComponent>
      </AuthCompWrapper>
    </div>
  );
};

export default ProfileView;
