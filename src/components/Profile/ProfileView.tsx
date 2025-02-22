import React from "react";
import LoginBtn from "./LoginBtn";
import { LoadingRoundDottedIcon } from "./icons";
import { TAuthInfo } from "./authTypes";

type TProfileView = {
  auth: TAuthInfo;
  loginUrl: string;
  onClick: () => void;
  ImageComponent: any;
  LinkComponent: any;
  AuthCompWrapper: any;
  useLayout: () => { windowWidth: number };
  useRouter: () => { push: (arg0: string) => void };
  SIZE_SM: number;
};

const ProfileView: React.FC<TProfileView> = ({
  auth,
  onClick,
  loginUrl,
  LinkComponent,
  ImageComponent,
  AuthCompWrapper,
  useLayout,
  useRouter,
  SIZE_SM,
}) => {
  return (
    <div className="profile_view w-auto lg:w-full h-8 sm:h-10 flex items-center">
      <AuthCompWrapper auth={auth}>
        <LinkComponent
          href="#"
          type="button"
          className="size-8 sm:size-10 rounded-full border border-[#AE00B9] relative"
          onClick={onClick}
        >
          <ImageComponent
            src={auth.currentUser.photoUrl}
            alt="user_avatar"
            width={100}
            height={100}
            sizes="100vw"
            className="rounded-full size-full"
          />

          {/* Notification Bullet point */}
          {/* <span className="size-2 bg-warning rounded-full absolute top-0 right-0 " /> */}
        </LinkComponent>
        <LoginBtn
          loginUrl={loginUrl}
          SIZE_SM={SIZE_SM}
          useLayout={useLayout}
          useRouter={useRouter}
        />
        <LinkComponent href="#" type="button" className="size-10">
          <LoadingRoundDottedIcon />
        </LinkComponent>
      </AuthCompWrapper>
    </div>
  );
};

export default ProfileView;
