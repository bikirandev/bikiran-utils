"use client";

import SidebarMenuRow from "./SidebarMenuRow";
import React, { useEffect, useRef } from "react";
import { sidebarIcons } from "./SidebarIcons";
import "./sidebarStyle.css";
// import { cn } from "@/bik-lib/utils/cn";
// import { navLinks } from "../headerConstants";
import HeaderLogoComp from "../HeaderLogoComp";
import { cn } from "../../../lib/utils/cn";

type TSidebar = {
  show: boolean;
  closeMenu: () => void;
  ImageComponent: any;
  LinkComponent: any;
  navLinks: any;
  routerFn: () => any;
};

const SidebarMenu: React.FC<TSidebar> = ({
  show,
  closeMenu,
  ImageComponent,
  LinkComponent,
  navLinks,
  routerFn,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handelClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, [closeMenu]);
  return (
    <div
      className={cn("sidebar_menu_wrapper", {
        active: show,
      })}
    >
      <div className="sidebar_menu " ref={ref}>
        {/* <SidebarTopRow closeMenu={closeMenu} /> */}
        <div className="h-[80px] border-b">
          <div className="pt-2 ml-14 w-[150px] h-full">
            <HeaderLogoComp
              ImageComponent={ImageComponent}
              LinkComponent={LinkComponent}
            />
          </div>
        </div>
        <button
          type="button"
          className="block  w-7 absolute top-7 left-4"
          onClick={closeMenu}
        >
          <ImageComponent
            src={sidebarIcons.iconBack}
            alt="arrow"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </button>
        <div className="h-[calc(100%_-_200px)] overflow-auto">
          <SidebarMenuRow
            listArr={navLinks}
            closeMenu={closeMenu}
            ImageComponent={ImageComponent}
            routerFn={routerFn}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
