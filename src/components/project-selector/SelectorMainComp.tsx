import { Dispatch, FC, SetStateAction } from "react";
import { selectorIcons } from "./selector-icons/selectorIcons";
import { TProject } from "./projectTypes";

const SelectorMainComp: FC<{
  setShow: Dispatch<SetStateAction<boolean>>;
  activeProject: TProject;
  ImageComponent: any;
}> = ({ setShow, activeProject, ImageComponent }) => {
  return (
    <div
      className="flex items-center gap-2.5 size-14  md:size-full px-2.5 py-[3px] rounded-10 bg-primary-50 transition-colors overflow-hidden cursor-pointer"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="w-full max-w-10 h-full flex items-center">
        <ImageComponent
          src={selectorIcons.iconDefaultApp}
          alt="project-selector"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-full"
        />
      </div>
      <div className="flex-1 overflow-hidden hidden md:block">
        <div className="flex items-center gap-1 text-primary text-sm font-normal [&>span]:whitespace-nowrap">
          <span>Project</span>
          <span>&#x3e;</span>
          <span className="overflow-hidden text-ellipsis">App Name</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-primary text-lg text-left font-medium leading-6 text-nowrap overflow-hidden text-ellipsis">
            {activeProject.title || "Select Project"}
          </h3>
          <div className="w-4">
            <ImageComponent
              src={selectorIcons.arrowDown}
              alt="arrow-down"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorMainComp;
