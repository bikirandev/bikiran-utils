import { FC, useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import { iconReset } from "./icons/Icons";
import style from "./style/FilterBarWrapper.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  formData: Record<string, any>;
  onSearch: (search: string) => void;
  resetClick?: () => void;
  children: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  outsideClick?: boolean;
};

const getStrValue = (filter: Record<string, any>) => {
  // //check if value is not string type then convert it to string
  if (Object.values(filter).some((val) => typeof val !== "string")) {
    const newFilter = { ...filter };
    Object.keys(newFilter).forEach((key) => {
      if (typeof newFilter[key] !== "string") {
        newFilter[key] = JSON.stringify(newFilter[key]);
      }
    });
    return JSON?.stringify(newFilter)?.replace(/[{},"]/g, " ");
  }
  //if any property is empty then remove that property
  if (Object.values(filter).some((val) => val?.trim() === "")) {
    const newFilter = { ...filter };
    Object.keys(newFilter).forEach((key) => {
      if (newFilter[key]?.trim() === "") {
        delete newFilter[key];
      }
    });
    return JSON?.stringify(newFilter)?.replace(/[{},"]/g, " ");
  }

  return JSON?.stringify(filter)?.replace(/[{},"]/g, " ");
};

const FilterBarWrapper: FC<TProps> = ({
  children,
  formData,
  disabled,
  placeholder = "Search anything...",
  onSearch,
  // resetClick,
  className,
  outsideClick = true,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // get queries
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  // get properties of formData object from urlParams
  const properties =
    Object.fromEntries(
      Object.keys(formData).map((key) => [key, urlParams.get(key) || ""])
    ) || {};
  const [filters, setFilters] = useState(properties);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const filterValues = Object.keys(filters).length > 0 ? filters : properties;
  const searchedValue: string = getStrValue(filterValues) || "";

  useEffect(() => {
    const urlParams = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const properties =
      Object.fromEntries(
        Object.keys(formData).map((key) => [key, urlParams.get(key) || ""])
      ) || {};
    setFilters(properties);
  }, [window.location.search]);

  // outside click
  useEffect(() => {
    // outsideClick defaults to true if undefined
    const enableOutsideClick = outsideClick !== false;

    if (enableOutsideClick) {
      const handleClickOutside = (e: MouseEvent) => {
        const isSelectClick =
          (e.target as Element)?.closest('[role="combobox"]') ||
          (e.target as Element)?.closest('[role="listbox"]');

        if (
          ref.current &&
          !ref.current.contains(e.target as Node) &&
          !isSelectClick
        ) {
          setIsFilterOpen(false);
          setIsFocus(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [outsideClick, ref]);

  const isOpen = isFilterOpen || isFocus;

  const handleSearch = () => {
    // Build the query string
    const queryString = Object.entries(formData)
      .filter(([_, value]) => value) // Filter out empty values
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    onSearch(`?${queryString}`);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
    setIsFilterOpen(false);
    setIsFocus(false);
  };

  const resetClick = () => {
    //reset all the fields
    setFilters(
      Object.fromEntries(Object.keys(formData).map((key) => [key, ""])) || {}
    );
    onSearch("");
  };

  return (
    <div
      className={cn(
        style.filterBarContainer,
        "filterBarContainer",
        className,
        disabled
          ? style.filterBarContainerDisabled
          : "filterBarContainerDisabled"
      )}
      ref={ref}
    >
      {/* Search Bar */}
      <SearchInput
        isOpen={isOpen}
        onFocus={() => setIsFocus(true)}
        toggleFilter={() => setIsFilterOpen((prev) => !prev)}
        searchedValue={searchedValue}
        placeholder={placeholder}
      />

      {/* Filter Section */}
      <div
        className={cn(
          style.expandSection,
          "expandSection",
          isOpen ? `${style.isExpanded} isExpanded` : ""
        )}
      >
        <form onSubmit={onSubmit} className={cn(style.form, "form")}>
          {children}
          <div className={style.buttonContainer}>
            {/* {resetClick !== undefined && (
              <button
                type="button"
                onClick={resetClick}
                className={cn(style.resetBtn, "resetBtn group")}
              >
                {iconReset("text-secondary group-hover:text-white")}
              </button>
            )} */}
            <button
              type="button"
              onClick={resetClick}
              className={cn(style.resetBtn, "resetBtn group")}
            >
              {iconReset("text-secondary group-hover:text-white")}
            </button>
            <button className={cn(style.searchBtn, "searchBtn")}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterBarWrapper;
