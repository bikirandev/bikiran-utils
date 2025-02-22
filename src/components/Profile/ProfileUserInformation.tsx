import { FC } from "react";

import { LogoutIcon } from "./icons";
import { TAuthInfo } from "./authTypes";

const ProfileUserInformation: FC<{
  auth: TAuthInfo;
  logout: () => void;
  ImageComponent: any;
}> = ({ auth, logout, ImageComponent }) => {
  const user = auth.currentUser;

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[14px]">
        <div className="size-[70px] overflow-hidden">
          <ImageComponent
            src={auth.currentUser.photoUrl}
            alt="User Avatar"
            width={0}
            height={0}
            size="100vw"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <div className="full-name text-primary text-xl font-medium">
            {user.name}
          </div>
          <div className="full-name text-primary-700 text-base font-normal">
            {user.email}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={logout}
        className="size-10 p-2 bg-primary-100 sm:bg-transparent sm:hover:bg-primary-100 rounded-full transition-colors"
      >
        <LogoutIcon />
      </button>
    </div>
  );
};

export default ProfileUserInformation;
