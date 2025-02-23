"use client";
import { FC, useState } from "react";
import { headerIcons } from "./icons/icons";
import SidebarMenu from "./sidebar/SidebarMenu";

const HeaderToggleMenuComp: FC<{
  ImageComponent: any;
  LinkComponent: any;
  windowWidth: number;
  navLinks?: any;
}> = ({ ImageComponent, windowWidth, navLinks, LinkComponent }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const SIZE_LG = 991;

  if (!windowWidth) return null;
  if (windowWidth && windowWidth > SIZE_LG) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowSidebar((st) => !st)}
        className="w-7 sm:h-[30px] block"
      >
        <ImageComponent
          src={headerIcons.iconMenu}
          alt="Menu"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </button>

      <SidebarMenu
        show={showSidebar}
        closeMenu={() => setShowSidebar(false)}
        ImageComponent={ImageComponent}
        LinkComponent={LinkComponent}
        navLinks={navLinks}
      />
    </>
  );
};

export default HeaderToggleMenuComp;
