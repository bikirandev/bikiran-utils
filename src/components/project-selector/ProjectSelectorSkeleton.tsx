import React, { FC } from "react";
import { Skeleton } from "../../lib/Skeleton";

const ProjectSelectorSkeleton: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="w-9 h-9" />
      <Skeleton className="w-full h-9" />
    </div>
  );
};

export default ProjectSelectorSkeleton;
