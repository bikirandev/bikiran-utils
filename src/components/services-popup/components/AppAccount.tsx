import React from "react";
import { getAccountUrl } from "../../../lib/utils/Env";
import { serviceIcons } from "../icons/Icons";

const AppAccount: React.FC<{
  logo: string;
  LinkComponent: any;
  ImageComponent: any;
}> = ({ logo = "", LinkComponent, ImageComponent }) => {
  const url: string = getAccountUrl();

  return (
    <LinkComponent
      href={url}
      target="_blank"
      referrerPolicy="no-referrer"
      className="size-full sm:size-[100px] border border-primary-100 bg-white rounded-[18px] px-4 pt-[8px] overflow-hidden flex flex-col justify-center items-center cursor-pointer"
    >
      <div className="size-[35px] sm:size-[50px] rounded-full mb-1.5">
        <ImageComponent
          src={logo?.length ? logo : serviceIcons.iconAccount}
          alt="user"
          width={50}
          height={50}
          priority
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <p className="text-primary-700 text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        Account
      </p>
    </LinkComponent>
  );
};

export default AppAccount;
