"use client";
import { useState, useRef, useEffect, FC } from "react";
import ProfileView from "./ProfileView";
import ProfileMenuPopup from "./ProfileMenuPopup";
import { cn } from "../../lib/utils/cn";
import style from "./style/ProfileManage.module.css";

const ProfileManage: FC<{
  LinkComponent: any;
  AuthCompWrapper: any;
  ImageComponent: any;
  authFn: () => {
    authInfo: any;
    logOut: () => void;
    loginUrl: string;
  };
}> = ({ LinkComponent, AuthCompWrapper, ImageComponent, authFn }) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { authInfo, logOut, loginUrl } = authFn();
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const SIZE_SM = 576;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handleLogout = () => {
    // -- handler for logout
    logOut();
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
    <div className={cn("profile-manage", style.profileManage)} ref={bodyRef}>
      <div className={cn("content", style.content)}>
        <ProfileView
          auth={authInfo}
          onClick={() => setShowMenu((prev) => !prev)}
          loginUrl={loginUrl}
          LinkComponent={LinkComponent}
          AuthCompWrapper={AuthCompWrapper}
          ImageComponent={ImageComponent}
          SIZE_SM={SIZE_SM}
          windowWidth={windowWidth}
        />
      </div>

      <ProfileMenuPopup
        show={showMenu}
        authInfo={authInfo}
        logout={handleLogout}
        closeClick={() => setShowMenu((prev) => !prev)}
        LinkComponent={LinkComponent}
        ImageComponent={ImageComponent}
      />
    </div>
  );
};

export default ProfileManage;
