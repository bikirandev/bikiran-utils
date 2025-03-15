import { FC, useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import { iconReset } from "./icons/Icons";
import { cn } from "../../lib/utils/cn";

type TProps = {
  formData: Record<string, any>;
  onSearch: (search: string) => void;
  resetClick?: () => void;
  children: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  overflow?: string;
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
  resetClick,
  overflow,
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
  }, [ref]);

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

  return (
    <div
      className={cn(
        "bg-white shadow-[0_7px_20px_rgb(174_0_185/5%)] rounded-10 relative z-[1]",
        {
          "[&_input]:bg-primary-50 [&>div]:!border-primary-100 bg-primary-50  pointer-events-none ":
            disabled,
        }
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
          "w-full bg-white shadow-[0_7px_20px_rgb(174_0_185/5%)] absolute top-8 left-0 z-30 max-h-0 overflow-hidden transition-[max-height] ",
          {
            "max-h-[500px] rounded-bl-10 rounded-br-10": isOpen,
            [`${overflow}`]: isOpen,
          }
        )}
      >
        <form
          onSubmit={onSubmit}
          className="pt-8 px-4 pb-4 space-y-3 border border-secondary-100 border-t-transparent rounded-bl-10 rounded-br-10"
        >
          {children}
          <div className="flex justify-end gap-2.5">
            {resetClick !== undefined && (
              <button
                type="button"
                onClick={resetClick}
                className="rounded-[8px] bg-secondary-100 hover:bg-secondary p-1.5 group transition-colors"
                style={{ height: "34px", width: "34px" }}
              >
                {iconReset("text-secondary group-hover:text-white")}
              </button>
            )}

            <button
              className={cn(
                "relative px-3 h-[34px] text-base font-medium rounded-[8px] transition-colors disabled:bg-primary-100 disabled:pointer-events-none disabled:text-primary-500 w-36  bg-[#AE00B9] text-white"
              )}
              style={{ height: "34px" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterBarWrapper;
