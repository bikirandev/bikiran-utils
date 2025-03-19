"use client";
import { FC } from "react";
import style from "./style/Pagination.module.css";
import { cn } from "../../lib/utils/cn";

type TPagination = {
  currentPage: number;
  contentPerPage: number;
  totalContent: number;
  numberOfPages: number;
  showingFrom: number;
  showingTo: number;
  pages: number[];
};

const Tab: FC<{
  path: string;
  title: string;
  isDisabled: boolean;
  LinkComp: any;
}> = ({ path, title, isDisabled, LinkComp }) => {
  return (
    <LinkComp
      href={path}
      className={cn(
        style.tab,
        "tab",
        isDisabled ? style.tabDisabled : "tabDisabled"
      )}
    >
      {title}
    </LinkComp>
  );
};
const Pages: FC<{
  pages: number[];
  total: number;
  disabled: boolean;
  pathNameFn: any;
  searchParamsFn: any;
  LinkComp: any;
}> = ({ pages, total, disabled, pathNameFn, searchParamsFn, LinkComp }) => {
  // const [show, setShow] = useState<boolean>(false);

  const pathname = pathNameFn();
  const searchParams = searchParamsFn();
  const currentPage = Number(searchParams.get("CurrentPage")) || 1;
  const queries = new URLSearchParams(searchParams.toString());
  const nextPage = pages?.length
    ? Math.min(currentPage + 1, pages[pages.length - 1])
    : currentPage;

  // Make URL with existing queries if any
  const mkUrl = (number: number) => {
    queries.set("CurrentPage", number.toString());
    return `${pathname}?${queries.toString()}`;
  };

  return (
    <div className={cn(style.pagesComp, " pagesComp")}>
      {/* Prev */}
      <Tab
        title="<"
        path={mkUrl(currentPage - 1)}
        isDisabled={currentPage === 1 || !currentPage || disabled}
        LinkComp={LinkComp}
      />

      {/* Pages */}
      {pages?.map((number: number) => {
        if (number === -100 || number === -101) {
          return (
            <div key={number} className={cn(style.dots, "dots")}>
              ....
            </div>
          );
        }

        return (
          <LinkComp
            key={number}
            href={mkUrl(number)}
            className={cn(
              style.linkComp,
              "linkComp",
              disabled ? style.linkCompDisabled : "linkCompDisabled",
              !disabled && (currentPage || 1) === number
                ? style.linkActive
                : "linkActive"
            )}
          >
            {number}
          </LinkComp>
        );
      })}

      {/* Next */}
      <Tab
        title=">"
        path={mkUrl(nextPage)}
        isDisabled={currentPage === total || disabled}
        LinkComp={LinkComp}
      />
    </div>
  );
};

// todo: Create a Pagination data validation

const Pagination: FC<{
  data: TPagination;
  LinkComp: any;
  pathNameFn: any;
  searchParamsFn: any;
  disabled?: boolean;
}> = ({ data, disabled = false, LinkComp, pathNameFn, searchParamsFn }) => {
  // Hide pagination if no data
  if (data == null) {
    return null;
  }

  // Hide pagination if only one page
  return (
    <div className={cn(style.paginationContainer, "paginationContainer")}>
      <div className={cn(style.showingText, "showingText")}>
        Showing {data.showingFrom} to {data.showingTo} of {data.totalContent}
        &nbsp; entries
      </div>
      <Pages
        pages={data?.pages}
        total={data?.numberOfPages}
        disabled={disabled}
        LinkComp={LinkComp}
        pathNameFn={pathNameFn}
        searchParamsFn={searchParamsFn}
      />
    </div>
  );
};

export default Pagination;
