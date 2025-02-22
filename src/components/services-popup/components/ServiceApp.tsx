import React, { FC } from "react";
import { TApp } from "../ServiceAppType";
import { serviceIcons } from "../icons/Icons";

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
        className="w-full h-[100px]  border border-primary-100 bg-white rounded-[18px] px-4 pt-[8px] overflow-hidden flex flex-col justify-center items-center cursor-pointer "
      >
        <div className="size-[35px] sm:size-[50px] mb-1.5">
          <ImageComponent
            src={app?.logo || serviceIcons.iconDefault}
            alt={app?.name}
            width={50}
            height={50}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-primary-700 text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          {app?.name}
        </p>
      </LinkComponent>
    </div>
  );
};

export default ServiceApp;
