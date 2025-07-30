/* eslint-disable no-unused-vars */
"use client";
import { FC, useEffect } from "react";
import AppAccount from "./components/AppAccount";
import ServiceApp from "./components/ServiceApp";
import { serviceIcons } from "./icons/Icons";
import style from './style/Service.module.css'
import { cn } from "../../lib/utils/cn";

interface ServicesPopupProps {
  auth: {
    currentUser?: {
      photoUrl?: string;
    };
  };
  apps?: {
    id: string;
    status: string;
  }[];
  setShow: (show: boolean) => void;
  ref?: any;
  applicationData: any[];
  LinkComponent: any;
  ImageComponent: any;
}

type TBtnProps = {
  onClick: (ev: any) => void;
  ImageComponent: any;
};
const ButtonClose: FC<TBtnProps> = ({ onClick, ImageComponent }) => {
  return (
    <div
      onClick={onClick}
      className={style.closeBtn}
    >
      <ImageComponent
        src={serviceIcons.iconCross}
        alt="cross"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full h-auto rounded-full"
      />
    </div>
  );
};

const ServicesPopup: FC<ServicesPopupProps> = ({
  auth,
  apps = [],
  setShow,
  ref,
  applicationData,
  LinkComponent,
  ImageComponent,
}) => {
  useEffect(() => {
    // ref outside focus or click or scroll then close the profile info
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const arr = apps?.length
    ? apps.filter((a) => a.status !== "inactive")
    : applicationData?.filter((a) => a.status !== "inactive") || [];

  const staticAppLogo = auth?.currentUser?.photoUrl || "";

  return (
    <div className={style.popupContainer}>
      <div className={cn(style.popupWrapper, 'custom-scrollbar')}>
        {/* {arr && arr.length === 0 && (
          <div className="size-full flex items-center justify-center">
            <p className="text-primary-700 text-base font-medium">
              No apps available!
          <ButtonClose setShow={setShow} />
          </div>
        )} */}
        <div className="flex items-center justify-end sm:hidden">
          <ButtonClose
            onClick={(ev) => {
              ev.stopPropagation();
              ev.preventDefault();
              setShow(false);
            }}
            ImageComponent={ImageComponent}
          />
        </div>
        <div className={style.serviceListContainer}>
          <AppAccount
            logo={staticAppLogo}
            LinkComponent={LinkComponent}
            ImageComponent={ImageComponent}
          />
          {arr.map((app) => (
            <ServiceApp
              key={app.id}
              app={app}
              LinkComponent={LinkComponent}
              ImageComponent={ImageComponent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPopup;
