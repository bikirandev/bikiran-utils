"use client";
import { FC } from "react";
import { LoginFill } from "./icons";

const LoginBtn: FC<{
  loginUrl: string;
  SIZE_SM: number;
  useLayout: () => { windowWidth: number };
  useRouter: () => { push: (arg0: string) => void };
}> = ({ loginUrl = "", useLayout, SIZE_SM, useRouter }) => {
  const { windowWidth } = useLayout();
  const router = useRouter();
  if (!windowWidth) return null;
  if (windowWidth && windowWidth < SIZE_SM) {
    return (
      <button
        type="button"
        className="block size-7"
        onClick={() => router.push(loginUrl)}
      >
        <LoginFill />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => router.push(loginUrl)}
      className="bg-secondary-100 text-secondary rounded-lg leading-6 text-base font-normal p-2 w-24 hover:text-white hover:bg-secondary transition"
    >
      Login
    </button>
  );
};

export default LoginBtn;
