"use client";
import { FC } from "react";
import ProjectServiceTabs from "./ProjectServiceTabs";
type TProps = {
  useProject: () => {
    selectService: (id: number) => void;
    selectedService: number;
  };
};

const ProjectServices: FC<TProps> = ({ useProject }) => {
  const { selectedService, selectService } = useProject();

  return (
    <div>
      <ProjectServiceTabs
        selectedService={selectedService}
        selectService={selectService}
      />

      {selectedService && (
        <div className="p-2.5 bg-primary-50 rounded-10">
          <h3 className="text-primary text-lg font-medium">
            {selectedService}
          </h3>
          <p className="text-primary-200 text-sm font-normal">
            This is a dummy content to show the selected service
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectServices;
