import { FC } from "react";
import { headerIcons } from "./icons/icons";

const HeaderLogoComp: FC<{
  ImageComponent: any;
  LinkComponent: any;
}> = ({ ImageComponent, LinkComponent }) => {
  return (
    <LinkComponent href="/" className="lg:w-auto xl:w-[160px] h-10 xl:h-[50px]">
      <ImageComponent
        src={headerIcons.iconBikLogo}
        alt="logo"
        width={0}
        height={0}
        className="size-full"
        priority
      />
    </LinkComponent>
  );
};

export default HeaderLogoComp;
