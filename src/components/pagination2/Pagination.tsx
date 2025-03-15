"use client";
import { FC } from "react";
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
      className={`px-2.5 min-h-8 text-sm flex justify-center items-center py-1 bg-secondary-100 hover:bg-secondary text-secondary hover:text-white transition-colors rounded-5 ${
        isDisabled ? "grayscale pointer-events-none" : ""
      }`}
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
    <div className="flex justify-center items-end gap-3 py-3 relative ">
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
            <div key={number} className="text-secondary">
              ....
            </div>
          );
        }

        return (
          <LinkComp
            key={number}
            href={mkUrl(number)}
            className={`w-10 min-h-8 flex justify-center items-center py-1 bg-secondary-100 hover:bg-secondary text-secondary hover:text-white transition-colors rounded-5 
              ${
                disabled
                  ? "!bg-primary-100 !text-primary-300 pointer-events-none"
                  : ""
              }
              ${
                !disabled && (currentPage || 1) === number
                  ? "!bg-secondary text-white"
                  : ""
              } 
              `}
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
    <div className={`w-full flex justify-between items-center`}>
      <div className="text-primary">
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
