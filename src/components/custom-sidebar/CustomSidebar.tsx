"use client";
import { FC, ReactNode, useEffect } from "react";
import { cn } from "../../lib/utils/cn";
import { IconClose } from "./icons";
import style from "./style/CustomSidebar.module.css";

type TProps = {
  children: ReactNode;
  className?: string;
  showType: string;
  usePathname: () => string;
  useTemplate: () => {
    modalType: string;
    closeModal: () => void;
    openModal: (type: string, data: any) => void;
    modalData: any;
  };
};

const Content: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn(style.content, "content", className)}>{children}</div>
  );
};

const CustomSidebar: FC<TProps> = ({
  children,
  className,
  showType,
  usePathname,
  useTemplate,
}) => {
  const { modalType, closeModal, openModal, modalData } = useTemplate();
  const pathname = usePathname();

  const isOpen = modalType === showType;

  const handleToggle = () => {
    if (isOpen) {
      openModal("", modalData);
    } else {
      openModal(showType, modalData);
    }
  };

  useEffect(() => {
    if (isOpen) {
      closeModal();
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        style.container,
        className,
        modalType === showType ? style.type : "type"
      )}
    >
      <div className="flex items-stretch h-full">
        <div
          className={cn(
            style.sidebarBody,
            "sidebarBody",
            isOpen ? style.sidebarBodyOpen : "sidebarBodyOpen"
          )}
        >
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              style.btnClose,
              "btnClose",
              !isOpen ? style.notOpen : "notOpen"
            )}
          >
            {isOpen ? <IconClose /> : null}
          </button>
        </div>
        <Content className="content-wrapper">{children}</Content>
      </div>
    </div>
  );
};

export default CustomSidebar;
