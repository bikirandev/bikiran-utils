"use client";
import { useEffect, useState } from "react";
import { getBaseDomain, getBikiranUrl } from "../../lib/utils/Env";
import style from "./style/CookieAcceptPopup.module.css";
import Cookie from "../../lib/utils/Cookie";
import { cn } from "../../lib/utils/cn";

const CookiesAcceptPopup = () => {
  // State to control the popup visibility
  const [mode, setMode] = useState<boolean>(false);

  // State to check if the user has already accepted the cookie policy
  const [isAccept, setIsAccept] = useState<boolean>(
    new Cookie("accept-tc", getBaseDomain()).verifyCookie("yes")
  );

  // Handle mode change when the user accepts cookies
  useEffect(() => {
    if (mode) {
      // Set Data to cookies to parent domain
      const cookie = new Cookie("accept-tc", getBaseDomain());
      cookie.setCookie("yes", 365);
      setIsAccept(true);
    }
  }, [mode]);

  // Return null if cookies have already been accepted
  if (isAccept) {
    return null;
  }

  return (
    <div className={cn(style.container, "container")}>
      <p className={cn(style.text, "text")}>
        This site uses cookies. By continuing to use this website, you agree to
        their use. For details, please check our{" "}
        <a
          href={getBikiranUrl() + "/legal/privacy-policy"}
          target="_blank"
          className={cn(style.a, "a")}
        >
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="button"
        className={cn(style.btn, "btn")}
        onClick={() => setMode(true)}
      >
        I Accept
      </button>
    </div>
  );
};

export default CookiesAcceptPopup;
