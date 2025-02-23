/* eslint-disable no-unused-vars */
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ProjectListBody from "./ProjectListBody";
import { TProject } from "./projectTypes";

const CloseButton: FC<{ setShow: Dispatch<SetStateAction<boolean>> }> = ({
  setShow,
}) => {
  return (
    <button
      type="button"
      onClick={() => setShow(false)}
      className="absolute right-2.5 top-2.5 rounded-full border border-error bg-red-50 p-[3px] text-error opacity-90 block md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};

const ListHeader: FC = () => {
  return (
    <div className="flex items-end md:items-center justify-between gap-10 h-24 md:h-[50px] px-5 pb-4 md:pb-2.5 md:pt-2.5 border-b border-primary-200 rounded-tr-20 rounded-tl-20">
      <h3 className="text-primary text-lg font-medium whitespace-nowrap">
        List of Projects
      </h3>
      <input
        type="text"
        name="search"
        placeholder="Search Project"
        className="px-2.5 w-full h-7 rounded-5 bg-primary-50 focus:outline-none"
      />
    </div>
  );
};

const ProjectListPopup: FC<{
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  top: number;
  projectData: TProject[];
  selectProject: (project: TProject) => void;
  activeProject: TProject;
  ImageComponent: any;
  useProject: () => {
    selectService: (id: number) => void;
    selectedService: number;
  };
}> = ({
  setShow,
  show,
  top,
  projectData,
  activeProject,
  selectProject,
  ImageComponent,
  useProject,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed md:absolute left-0 z-[99999] size-full md:size-auto bg-white border md:rounded-10 md:max-h-[400px] overflow-auto"
      style={{
        // Ensure correct top position based on window width
        top: windowWidth > 768 ? top : 0,
      }}
    >
      <CloseButton setShow={setShow} />
      <ListHeader />
      <ProjectListBody
        projectData={projectData}
        selectProject={selectProject}
        activeProject={activeProject}
        ImageComponent={ImageComponent}
        useProject={useProject}
      />
    </div>
  );
};

export default ProjectListPopup;
