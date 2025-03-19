"use client";
import { useEffect, useRef, useState, ReactNode, MouseEvent, FC } from "react";
import style from "./style/CurrencySelector.module.css";
import { cn } from "../../lib/utils/cn";

type TIconArrowProps = {
  className?: string;
};

type TOptionProps = {
  item: { currency?: string };
  isCurrent: boolean;
  onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
};

type TCurrencyDropdownProps = {
  children?: ReactNode;
  className?: string;
  onClick?: (currency: string) => void;
  value?: string;
  useApp: () => {
    currencies: any;
    locale: any;
    handelChangeLocale: (currency: string) => void;
  };
};

function IconArrow({ className }: TIconArrowProps) {
  return (
    <svg
      width="12"
      height="7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-all ${className}`}
    >
      <path
        d="M.808 5.159a.971.971 0 1 0 1.387 1.36l2.45-2.499c.627-.638.94-.958 1.337-.973.397-.015.734.28 1.407.868l2.636 2.303a.971.971 0 0 0 1.278-1.463l-4.016-3.51C6.613.656 6.277.362 5.879.378c-.397.015-.71.334-1.336.973L.808 5.159Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Option({ item, isCurrent, onClick }: TOptionProps) {
  return (
    <button
      type="button"
      className={cn(
        style.option,
        "option",
        isCurrent ? style.isCurrent : "isCurrent"
      )}
      onClick={onClick}
    >
      <span>{item?.currency || "--"}</span>{" "}
      <span>{item?.currency === "USD" ? "$" : "৳"}</span>
    </button>
  );
}

const CurrencySelector: FC<TCurrencyDropdownProps> = ({
  children,
  className,
  onClick,
  value,
  useApp,
}) => {
  const [open, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const { currencies, locale, handelChangeLocale } = useApp();

  const isCustomHandler = onClick && typeof onClick === "function";

  const handleOptionClick = (
    ev: React.MouseEvent<HTMLButtonElement>,
    item: { currency?: string }
  ) => {
    setOpen(true);

    if (isCustomHandler) {
      onClick(item?.currency as string);
    } else {
      handelChangeLocale(item?.currency as any);
    }
  };

  const handleMenuClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(true);
      }
    }

    document.addEventListener("mousedown", (ev) =>
      handleClickOutside(ev as any)
    );
    return () => {
      document.removeEventListener("mousedown", (ev) =>
        handleClickOutside(ev as any)
      );
    };
  }, [ref]);

  return (
    <div className={cn(style.container, className, "container")} ref={ref}>
      {children ? (
        <button type="button" className="" onClick={handleMenuClick}>
          {children}
        </button>
      ) : (
        <button
          type="button"
          className={cn(style.btn, "btn")}
          onClick={handleMenuClick}
        >
          <h2 className={cn(style.currency, "currency")}>
            {isCustomHandler ? value : locale?.currency}
          </h2>
          <IconArrow
            className={cn(
              style.iconArrow,
              "iconArrow",
              open ? style.iconArrowOpen : "iconArrowOpen"
            )}
          />
        </button>
      )}

      <div
        className={cn(
          style.dropDown,
          "dropDown",
          open ? style.dropDownOpen : "dropDownOpen"
        )}
      >
        {currencies &&
          currencies.map((item: any) => (
            <Option
              key={item.currency}
              item={item}
              isCurrent={
                isCustomHandler
                  ? item?.currency === value
                  : locale?.currency === item?.currency
              }
              onClick={(ev) => handleOptionClick(ev, item)}
            />
          ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
