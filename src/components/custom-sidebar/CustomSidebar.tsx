"use client";
import { FC, ReactNode, useEffect } from "react";
import { cn } from "../../lib/utils/cn";
import { IconClose } from "./icons";

type TProps = {
  children: ReactNode;
  className?: string;
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
    <div
      className={cn(
        "flex-1 bg-white p-5 pb-20 custom-scrollbar overflow-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const CustomSidebar: FC<TProps> = ({
  children,
  className,
  usePathname,
  useTemplate,
}) => {
  const { modalType, closeModal, openModal, modalData } = useTemplate();
  const pathname = usePathname();

  const isOpen = modalType === "custom-sidebar";

  const handleToggle = () => {
    if (isOpen) {
      openModal("", modalData);
    } else {
      openModal("custom-sidebar", modalData);
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
        "max-w-[800px] w-full h-full fixed top-[50px] right-0 z-[1] transition-[transform_right] transform translate-x-full",
        {
          "translate-x-0 ": modalType === "custom-sidebar",
        }
      )}
    >
      <div className="flex items-stretch h-full">
        <div
          className={cn(
            "w-0 h-full bg-primary-100  flex flex-col items-center py-3",
            {
              "w-16": isOpen,
            }
          )}
        >
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              "border border-primary-300 rounded-full bg-primary-300 size-7.5 flex justify-center items-center",
              {
                "bg-transparent border-0": !isOpen,
              }
            )}
          >
            {isOpen ? <IconClose /> : null}
          </button>
        </div>
        <Content className={className}>{children}</Content>
      </div>
    </div>
  );
};

export default CustomSidebar;
