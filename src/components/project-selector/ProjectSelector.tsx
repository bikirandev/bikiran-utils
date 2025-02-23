/* eslint-disable no-unused-vars */
"use client";
import { TProject } from "./projectTypes";
import { FC, useEffect, useRef, useState } from "react";
import SelectorMainComp from "./SelectorMainComp";
import ProjectListPopup from "./ProjectListPopup";
import ProjectSelectorSkeleton from "./ProjectSelectorSkeleton";

type TProps = {
  projectData: TProject[];

  activeProject: TProject;
  selectProject: (project: TProject) => void;
  loading: boolean;
  ImageComponent: any;
};

const ProjectSelector: FC<TProps> = ({
  projectData,
  activeProject,
  selectProject,
  loading,
  ImageComponent,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setCurrentHeight(ref.current.getBoundingClientRect().height);
    }
  }, [show]); // Update height when popup visibility changes

  // Calculate the top position of the popup
  const top = currentHeight + 10;

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the clicked target is outside the referenced element
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <ProjectSelectorSkeleton />;
  }
  return (
    <div ref={ref} className="relative flex justify-center ">
      <SelectorMainComp
        setShow={setShow}
        activeProject={activeProject}
        ImageComponent={ImageComponent}
      />
      <ProjectListPopup
        setShow={setShow}
        show={show}
        top={top}
        projectData={projectData}
        activeProject={activeProject}
        selectProject={selectProject}
        ImageComponent={ImageComponent}
      />
    </div>
  );
};

export default ProjectSelector;
