import { FC } from "react";
import { iconFilter } from "./icons/Icons";
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
        "flex items-center h-10 overflow-hidden border border-secondary-100 rounded-10 relative z-50",
        {
          "rounded-bl-none rounded-br-none ": isOpen,
        }
      )}
    >
      <input
        type="text"
        onChange={() => {}}
        onFocus={onFocus} // toggle filter bar
        value={searchedValue}
        readOnly
        placeholder="Search Anything...."
        className="flex-1 rounded-10 py-2 px-4 focus:outline-none text-xs"
        // onBlur={() => setIsFocus(false)}
      />

      {/* if searchedValue is empty then show placeholder */}
      {searchedValue?.length === 2 && (
        <span
          className="absolute top-1/2 left-4 -translate-y-1/2 text-primary-500"
          onClick={toggleFilter} // toggle filter bar
        >
          {placeholder}
        </span>
      )}
      <button
        className={cn(
          "w-10 h-[80%] mx-1 px-3 rounded-[5px] hover:bg-primary-100 transition-colors flex justify-center items-center",
          {
            "bg-primary-100": isOpen,
          }
        )}
        onClick={toggleFilter} // toggle filter bar
      >
        {iconFilter()}
      </button>
    </div>
  );
};

export default SearchInput;
