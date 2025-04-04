import { FC } from "react";

export const IconClose: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2b2754"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x h-4 w-4"
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  );
};

export const IconArrow: FC = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.525 12.655H7.024L13.018 7.16495C13.294 6.91195 13.447 6.57595 13.448 6.21995C13.449 5.86295 13.298 5.52695 13.023 5.27295C12.447 4.73995 11.507 4.73795 10.928 5.26895L2.429 13.052C2.152 13.306 2 13.642 2 13.999C2 14.357 2.152 14.694 2.428 14.947L2.427 14.948L10.928 22.731C11.507 23.261 12.447 23.26 13.023 22.726C13.298 22.472 13.449 22.136 13.448 21.779C13.447 21.422 13.295 21.087 13.018 20.834L7.024 15.344H24.526C25.338 15.344 26 14.742 26 14C26 13.258 25.338 12.655 24.525 12.655Z"
        fill="#130F40"
      />
    </svg>
  );
};
