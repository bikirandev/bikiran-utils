"use client";
import { FC } from "react";
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
  LinkComponent: FC<{ href: string; children: React.ReactNode }>;
}> = ({ path, title, isDisabled, LinkComponent }) => {
  return (
    <LinkComponent href={path}>
      <div
        className={cn(
          "px-2.5 min-h-8 text-sm flex justify-center items-center py-1 bg-secondary-100 hover:bg-secondary text-secondary hover:text-white transition-colors rounded-5",
          { "grayscale pointer-events-none": isDisabled }
        )}
      >
        {title}
      </div>
    </LinkComponent>
  );
};

const Pages: FC<{
  pages: number[];
  total: number;
  currentPage: number;
  mkUrl: (page: number) => string;
  disabled: boolean;
  LinkComponent: FC<{ href: string; children: React.ReactNode }>;
}> = ({ pages, total, disabled, LinkComponent, currentPage, mkUrl }) => {
  // const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-end gap-3 py-3 relative">
      {/* Prev */}
      <Tab
        title="<"
        path={mkUrl(currentPage - 1)}
        isDisabled={currentPage === 1 || !currentPage || disabled}
        LinkComponent={LinkComponent}
      />
      {pages?.map((number: number) => {
        if (number === -100 || number === -101) {
          return (
            <div key={number} className="text-secondary">
              ....
            </div>
          );
        }

        return (
          <LinkComponent key={number} href={mkUrl(number)}>
            <div
              className={cn(
                "w-10 min-h-8 flex justify-center items-center py-1 bg-secondary-100 hover:bg-secondary text-secondary hover:text-white transition-colors rounded-5 ",
                {
                  "!bg-primary-100 !text-primary-300 pointer-events-none":
                    disabled,
                  "!bg-secondary text-white":
                    !disabled && (currentPage || 1) === number,
                }
              )}
            >
              {number}
            </div>
          </LinkComponent>
        );
      })}

      {/* Next */}
      <Tab
        title=">"
        path={mkUrl(currentPage + 1)}
        isDisabled={currentPage === total || disabled}
        LinkComponent={LinkComponent}
      />
    </div>
  );
};

const Pagination: FC<{
  data: TPagination;
  disabled?: boolean;
  currentPage: number;
  mkUrl: (page: number) => string;
  link: FC<{ href: string; children: React.ReactNode }>;
}> = ({ data, disabled = false, link, mkUrl, currentPage }) => {
  if (!data.pages) return null;
  return (
    <div className={`w-full flex justify-between items-center`}>
      <div className="text-primary">
        Showing {data?.showingFrom} to {data?.showingTo} of {data?.totalContent}
        entries
      </div>
      <Pages
        pages={data?.pages}
        total={data?.numberOfPages}
        disabled={disabled}
        LinkComponent={link}
        currentPage={currentPage}
        mkUrl={mkUrl}
      />
    </div>
  );
};

export default Pagination;
