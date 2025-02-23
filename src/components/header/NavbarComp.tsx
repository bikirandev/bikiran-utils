"use client";

import { FC, useEffect, useRef, useState } from "react";
import { TNavMenu } from "./headerType";
import { headerIcons } from "./icons/icons";

// import { icons } from "@/bikiran/lib/icons";
// import { navLinks } from "./headerConstants";
// import { TNavMenu } from "./headerType";
// import { usePathname } from "next/navigation";
// import { SIZE_LG, useLayout } from "@/bik-lib/context/LayoutProvider";
// import { FC, useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import HeaderSubMenuListComp from "./HeaderSubMenuListComp";
type TNavMenuProps = {
  pathname: string;
  menu: TNavMenu;
  selectMenu: () => void;
  LinkComponent: any;
  ImageComponent: any;
};
type TNavCompProps = {
  ImageComponent: any;
  LinkComponent: any;
  navLinks: TNavMenu[];
  windowWidth: number;
  pathname: string;
};

const NavMenu: FC<TNavMenuProps> = ({
  pathname,
  menu,
  selectMenu,
  ImageComponent,
  LinkComponent,
}) => {
  // Check if the Main menu is active
  const isActiveMenu = (menu.path as string) === pathname;
  // Check if menu has sub menu
  const hasSubMenu = (menu.subMenu || []).length > 0;

  if (hasSubMenu) {
    return (
      <li className="group ">
        <div
          className={`text-primary text-base 2xl:text-lg font-medium hover:bg-primary-100 px-3.5 2xl:px-4 py-2.5 rounded-10 transition-colors cursor-pointer flex items-center gap-2.5`}
          onClick={selectMenu}
        >
          {menu.title}

          <div className="size-4.5 flex items-center">
            <ImageComponent
              src={headerIcons.iconArrowV2}
              alt=""
              width={100}
              height={100}
              sizes="100"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* <HeaderSubMenuListComp
          subMenu={menu.subMenu}
          className="group-hover:max-h-60 group-hover:opacity-100"
        /> */}
      </li>
    );
  }
  return (
    <li>
      <LinkComponent
        href={menu.path as string}
        className={`text-primary text-base 2xl:text-lg font-medium hover:bg-primary-100 px-3.5 2xl:px-4 py-2.5 rounded-10 transition-colors cursor-pointer ${
          isActiveMenu ? "bg-primary-100" : ""
        } `}
        // onClick={closeSubMenu}
      >
        {menu.title}
      </LinkComponent>
    </li>
  );
};
const NavbarComp: FC<TNavCompProps> = ({
  ImageComponent,
  LinkComponent,
  navLinks,
  pathname,
  windowWidth,
}) => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  // this  is section is for controlling outside click off the menu
  const menuRef = useRef<HTMLDivElement>(null);

  const SIZE_LG = 991;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const doc = document.getElementById("menu");
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !doc?.contains(event.target as Node)
      ) {
        setActiveMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectMenu = (id: string) => {
    if (activeMenu === id) {
      setActiveMenu("");
      return;
    }
    setActiveMenu(id);
  };

  if (windowWidth && windowWidth < SIZE_LG) return null;

  return (
    <nav className="size-full" ref={menuRef}>
      <ul className="size-full flex gap-3 items-center justify-center">
        {navLinks.map((menu: TNavMenu) => (
          <NavMenu
            ImageComponent={ImageComponent}
            LinkComponent={LinkComponent}
            selectMenu={() => selectMenu(menu.id)}
            menu={menu}
            pathname={pathname}
            key={menu.id}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarComp;
