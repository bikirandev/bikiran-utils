"use client";
import React, { useState } from "react";
import SidebarSubMenu from "./SidebarSubMenu";
import { sidebarIcons } from "./SidebarIcons";
import { TNavMenu } from "../headerType";
import { cn } from "../../../lib/utils/cn";

type TMenu = {
  listArr: TNavMenu[];
  closeMenu: () => void;
  ImageComponent: any;
  routerFn: () => any;
};

const SidebarMenuRow: React.FC<TMenu> = ({
  listArr,
  closeMenu,
  ImageComponent,
  routerFn,
}) => {
  const [openL1, setOpenL1] = useState(0);
  const router = routerFn();

  const onMenuClick = (menu: any) => {
    if (menu?.subMenu?.length > 0) {
      if (openL1 === menu?.id) {
        setOpenL1(0);
        return;
      }
      setOpenL1(menu?.id);

      return;
    }
    router.push(menu?.path);
    closeMenu();
  };

  return (
    <ul className="p-4 pr-8 space-y-4">
      {listArr?.map((menu: any) => (
        <li key={menu?.id}>
          <button
            type="button"
            className="flex items-center justify-between w-full"
            onClick={() => onMenuClick(menu)}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9">
                <ImageComponent
                  src={menu?.icon}
                  alt="menu"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-base font-normal">{menu?.title}</div>
            </div>
            {menu?.subMenu?.length > 0 ? (
              <div
                className={cn("w-2 transition-all duration-200", {
                  "opacity-0": true,
                  "rotate-90": menu?.id === openL1,
                  "opacity-100": menu?.subMenu?.length > 0,
                })}
              >
                <ImageComponent
                  src={sidebarIcons.iconArrowRight}
                  alt="arrow"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            ) : null}
          </button>

          <SidebarSubMenu
            show={openL1 === menu?.id}
            ImageComponent={ImageComponent}
            subMenu={menu?.subMenu}
            closeMenu={closeMenu}
          />
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenuRow;
