import { FC } from "react";
import { iconFilter } from "./icons/Icons";
import style from "./style/FilterBarWrapper.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  isOpen: boolean;
  onFocus: () => void;
  toggleFilter: () => void;
  searchedValue: string;
  placeholder: string;
};

const SearchInput: FC<TProps> = ({
  isOpen,
  onFocus,
  toggleFilter,
  searchedValue,
  placeholder,
}) => {

  return (
    <div
      className={cn(
        style.searchBar,
        "searchBar",
        isOpen ? style.searchBarIsOpen : "searchBarIsOpen"
      )}
    >
      <input
        type="text"
        onChange={() => {}}
        onFocus={onFocus} // toggle filter bar
        value={searchedValue}
        readOnly
        placeholder="Search Anything...."
        className={cn(style.searchBarInput, "searchBarInput")}
        // onBlur={() => setIsFocus(false)}
      />

      {/* if searchedValue is empty then show placeholder */}
      {searchedValue?.length === 2 && (
        <span
          className={cn(style.hasSearchValue, "hasSearchValue")}
          onClick={toggleFilter} // toggle filter bar
        >
          {placeholder}
        </span>
      )}
      <button
        className={cn(
          style.icon,
          "icon",
          isOpen ? "bg-primary-100" : "iconActive"
        )}
        onClick={toggleFilter} // toggle filter bar
      >
        {iconFilter()}
      </button>
    </div>
  );
};

export default SearchInput;
