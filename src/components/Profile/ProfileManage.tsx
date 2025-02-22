"use client";
import { useState, useRef, useEffect, FC } from "react";
import ProfileView from "./ProfileView";
import ProfileMenuPopup from "./ProfileMenuPopup";
import { TAuthInfo } from "./authTypes";

const ProfileManage: FC<{
  auth: TAuthInfo;
  loginUrl: string;
  logout: () => void;
  LinkComponent: any;
  AuthCompWrapper: any;
  ImageComponent: any;
  SIZE_SM: number;
  useLayout: () => { windowWidth: number };
  useRouter: () => { push: (arg0: string) => void };
}> = ({
  auth,
  logout,
  loginUrl,
  LinkComponent,
  AuthCompWrapper,
  ImageComponent,
  SIZE_SM,
  useLayout,
  useRouter,
}) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleLogout = () => {
    // -- handler for logout
    logout();
    // -- close the popup
    setShowMenu(false);
  };

  useEffect(() => {
    // bodyRef outside focus or click or scroll then close the profile info
    const handleClickOutside = (event: any) => {
      if (bodyRef.current && !bodyRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-manage relative z-50" ref={bodyRef}>
      <div className="flex items-center gap-2">
        <ProfileView
          auth={auth}
          onClick={() => setShowMenu((prev) => !prev)}
          loginUrl={loginUrl}
          LinkComponent={LinkComponent}
          AuthCompWrapper={AuthCompWrapper}
          ImageComponent={ImageComponent}
          SIZE_SM={SIZE_SM}
          useLayout={useLayout}
          useRouter={useRouter}
        />
      </div>

      <ProfileMenuPopup
        show={showMenu}
        authInfo={auth}
        logout={handleLogout}
        closeClick={() => setShowMenu((prev) => !prev)}
        LinkComponent={LinkComponent}
        ImageComponent={ImageComponent}
      />
    </div>
  );
};

export default ProfileManage;
