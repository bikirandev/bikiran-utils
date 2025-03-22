"use client";
import { FC } from "react";
import { UserIcon } from "./icons";

const LoginBtn: FC<{
  loginUrl: string;
  SIZE_SM: number;
  windowWidth: number;
  LinkComponent: any;
}> = ({ loginUrl = "", windowWidth, SIZE_SM, LinkComponent }) => {
  if (!windowWidth) return null;
  if (windowWidth && windowWidth < SIZE_SM) {
    return (
      <LinkComponent
        type="button"
        className="block size-7 cursor-pointer"
        href={loginUrl}
      >
        <UserIcon />
      </LinkComponent>
    );
  }
  return (
    <LinkComponent
      type="button"
      href={loginUrl}
      className="bg-secondary-100 text-secondary rounded-lg leading-6 text-base font-normal p-2 w-24 hover:text-white hover:bg-secondary transition"
    >
      Login
    </LinkComponent>
  );
};

export default LoginBtn;
