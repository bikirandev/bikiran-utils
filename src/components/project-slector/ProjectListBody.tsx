/* eslint-disable no-unused-vars */
import { FC } from "react";
import { selectorIcons } from "./selector-icons/selectorIcons";
import ProjectServices from "./ProjectServices";
import { TProject } from "./projectTypes";

const ProjectListItem: FC<{
  data: TProject;
  selectProject: (project: TProject) => void;
  activeProject: TProject;
  ImageComponent: any;
}> = ({ data, selectProject, activeProject, ImageComponent }) => {
  return (
    <li
      className={`w-full hover:bg-primary-50 p-2.5 rounded-10 ${
        activeProject.id === data.id ? "!bg-primary-50" : ""
      }`}
    >
      <button
        type="button"
        className="size-full flex gap-2.5 mb-2.5"
        onClick={() => selectProject(data)}
      >
        <div className="w-8 rounded-full ">
          <ImageComponent
            src={selectorIcons.iconDefaultApp}
            alt="default-app"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="flex-1 overflow-hidden text-left">
          <h3 className="text-primary text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            {data.title}
          </h3>
          <p className="text-primary-200 text-sm font-normal">#{data.id}</p>
        </div>
      </button>
    </li>
  );
};

const ProjectListBody: FC<{
  projectData: TProject[];
  activeProject: TProject;
  selectProject: (project: TProject) => void;
  ImageComponent: any;
  useProject: () => {
    selectService: (id: number) => void;
    selectedService: number;
  };
}> = ({
  projectData,
  activeProject,
  selectProject,
  ImageComponent,
  useProject,
}) => {
  return (
    <div className="size-full flex items-stretch gap.10 px-2.5 py-1.5 h-[calc(100%_-_96px)] md:h-[calc(100%_-_50px)] divide-x-2 divide-primary-200">
      <div className="w-[185px] pr-2.5 h-full">
        <ul className="overflow-auto h-full flex flex-col gap-1">
          {projectData?.map((item: TProject) => (
            <ProjectListItem
              key={item.id}
              data={item}
              selectProject={selectProject}
              activeProject={activeProject}
              ImageComponent={ImageComponent}
            />
          ))}
        </ul>
      </div>
      <div className="flex-1 px-2.5">
        <ProjectServices useProject={useProject} />
      </div>
    </div>
  );
};

export default ProjectListBody;
