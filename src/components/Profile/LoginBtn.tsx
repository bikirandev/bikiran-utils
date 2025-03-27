"use client";
import { FC } from "react";
import { UserIcon } from "./icons";
import style from "./style/LoginBtn.module.css";

const LoginBtn: FC<{
  loginUrl: string;
  SIZE_SM: number;
  windowWidth: number;
  LinkComponent: any;
}> = ({ loginUrl = "", windowWidth, SIZE_SM, LinkComponent }) => {
  if (!windowWidth) return null;
  if (windowWidth && windowWidth < SIZE_SM) {
    return (
      <LinkComponent type="button" className={style.userBtn} href={loginUrl}>
        <UserIcon />
      </LinkComponent>
    );
  }
  return (
    <LinkComponent type="button" href={loginUrl} className={style.loginBtn}>
      Login
    </LinkComponent>
  );
};

export default LoginBtn;
