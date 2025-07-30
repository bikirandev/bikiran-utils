import React, { FC } from "react";
import { TApp } from "../ServiceAppType";
import { serviceIcons } from "../icons/Icons";
import style from "../style/Service.module.css"

const ServiceApp: React.FC<{
  app: TApp;
  LinkComponent: any;
  ImageComponent: any;
}> = ({ app, LinkComponent, ImageComponent }) => {
  return (
    <div className=" relative flex justify-end">
      <LinkComponent
        href={app.website}
        referrerPolicy="no-referrer"
        target="_blank"
        className={style.serviceItem}
      >
        <div className={style.serviceLogo}>
          <ImageComponent
            src={app?.logo || serviceIcons.iconDefault}
            alt={app?.name}
            width={50}
            height={50}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <p className={style.serviceName}>
          {app?.name}
        </p>
      </LinkComponent>
    </div>
  );
};

export default ServiceApp;
