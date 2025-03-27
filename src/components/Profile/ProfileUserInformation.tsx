import { FC } from "react";

import { LogoutIcon } from "./icons";
import { TAuthInfo } from "./authTypes";
import { cn } from "../../lib/utils/cn";
import style from "./style/ProfileUserInformation.module.css";

const ProfileUserInformation: FC<{
  auth: TAuthInfo;
  logout: () => void;
  ImageComponent: any;
}> = ({ auth, logout, ImageComponent }) => {
  const user = auth.currentUser;

  return (
    <div className={cn("userInformation", style.userInformation)}>
      <div
        className={cn(
          "userInformationContainer",
          style.userInformationContainer
        )}
      >
        <div className={cn("userImageContainer", style.userImageContainer)}>
          <ImageComponent
            src={auth.currentUser.photoUrl}
            alt="User Avatar"
            width={100}
            height={100}
            sizes="100vw"
            className={cn("userImage", style.userImage)}
          />
        </div>

        <div className={cn("detailsContainer", style.detailsContainer)}>
          <div className={cn("username", style.username)}>{user.name}</div>
          <div className={cn("userEmail", style.userEmail)}>{user.email}</div>
        </div>
      </div>

      <button
        type="button"
        onClick={logout}
        className={cn("logoutBtn", style.logoutBtn)}
      >
        <LogoutIcon />
      </button>
    </div>
  );
};

export default ProfileUserInformation;
