/* eslint-disable no-unused-vars */
import { FC } from "react";
import { projectServices } from "./projectConstants";
import { TProjectService } from "./projectTypes";

const ProjectServiceTabs: FC<{
  selectService: (id: number) => void;
  selectedService: number;
}> = ({ selectService, selectedService }) => {
  return (
    <div className="flex justify-between items-center border-b border-primary-200 mb-2.5">
      {projectServices.map((service: TProjectService) => (
        <button
          key={service.id}
          className={`text-base p-2.5 ${
            selectedService === service.id
              ? "text-primary font-medium"
              : "text-primary-500 font-normal"
          }`}
          onClick={() => selectService(service.id)}
        >
          {service.title}
        </button>
      ))}
    </div>
  );
};

export default ProjectServiceTabs;
