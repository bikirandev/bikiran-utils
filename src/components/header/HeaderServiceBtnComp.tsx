"use client";
import { FC, useRef, useState } from "react";
import { TAuthInfo } from "../Profile/authTypes";
import { cn } from "../../lib/utils/cn";
import ServicesPopup from "../services-popup/ServicesPopup";

type TProps = {
  authInfo: TAuthInfo;
  applicationData: any;
  ImageComponent: any;
  LinkComponent: any;
};

const HeaderServiceBtnComp: FC<TProps> = ({
  applicationData,
  authInfo,
  ImageComponent,
  LinkComponent,
}) => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        "w-full hover:bg-primary-100 rounded-full transition-colors relative lg:p-2.5 p-1.5",
        {
          "bg-primary-100": show,
        }
      )}
      onClick={() => handleShow()}
    >
      <ImageComponent
        src={icons.iconAllService}
        alt="all service"
        width={0}
        height={0}
        className="size-[18px] lg:size-auto"
      />

      {show && (
        <ServicesPopup
          auth={authInfo}
          apps={applicationData}
          ImageComponent={ImageComponent}
          LinkComponent={LinkComponent}
          applicationData={applicationData}
          setShow={setShow}
          ref={ref}
        />
      )}
    </button>
  );
};

export default HeaderServiceBtnComp;
