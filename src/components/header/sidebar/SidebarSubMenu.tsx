"use client";

import { cn } from "../../../lib/utils/cn";

type TProps = {
  show: any;
  subMenu: any;
  closeMenu: any;
  ImageComponent: any;
};

const SidebarSubMenu: React.FC<TProps> = ({
  show,
  subMenu,
  closeMenu,
  ImageComponent,
}) => {
  // const router = useRouter();
  const onSubMenuClick = (menu: any) => {
    // router.push(menu?.path);
    closeMenu();
  };
  return (
    <ul
      className={cn("sidebar_menu_submenu", {
        active: show,
      })}
    >
      {subMenu?.map((menu: any) => (
        <li key={menu?.id}>
          <button
            type="button"
            className="flex items-center justify-between w-full"
            onClick={() => onSubMenuClick(menu)}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-[24px]">
                <ImageComponent
                  src={menu?.icon}
                  alt="menu"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-sm font-normal">{menu?.title}</div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SidebarSubMenu;
