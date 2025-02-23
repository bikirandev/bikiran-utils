import { FC, ReactNode, useEffect, useState } from "react";
import { cn } from "../../lib/utils/cn";
import FixedHeaderControl from "./FixedHeaderControl";
import HeaderToggleMenuComp from "./HeaderToggleMenuComp";
import HeaderLogoComp from "./HeaderLogoComp";
import HeaderLoginColumnComp from "./HeaderLoginColumnComp";
import NavbarComp from "./NavbarComp";

type THeaderProps = {
  className?: string;
  children?: ReactNode;
  cartFn?: () => {
    cartItems: any[];
    reloadCartData: () => void;
  };
  removeProductFromCartFn?: (id: number) => void;
  ImageComponent: any;
  LinkComponent: any;
  authWrapper: any;
  authFn: () => any;
  templateFn: () => any;
  routerFn: () => any;
  pathname: string;
  applicationData: any;
  navLinks?: any;
};

const Container: FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  return <div className={cn("h-full", className)}>{children}</div>;
};

const HeaderSection: FC<THeaderProps> = ({
  className,
  children,
  ImageComponent,
  LinkComponent,
  authWrapper,
  authFn,
  cartFn,
  templateFn,
  pathname,
  applicationData,
  removeProductFromCartFn,
  navLinks,
  routerFn,
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
  return (
    <FixedHeaderControl>
      <header className={cn("header_container", className)}>
        <div className="flex items-center justify-between w-full md:px-12 px-6">
          <Container className="w-auto xl:w-[300px] 2xl:w-[350px] flex items-center justify-start gap-3.5">
            <HeaderToggleMenuComp
              LinkComponent={LinkComponent}
              ImageComponent={ImageComponent}
              windowWidth={windowWidth}
              navLinks={navLinks}
              routerFn={routerFn}
            />
            <HeaderLogoComp
              ImageComponent={ImageComponent}
              LinkComponent={LinkComponent}
            />
          </Container>
          <Container className="flex-1 lg:w-full">
            {children ? (
              children
            ) : (
              <NavbarComp
                ImageComponent={ImageComponent}
                LinkComponent={LinkComponent}
                navLinks={navLinks}
                pathname={pathname}
                windowWidth={windowWidth}
              />
            )}
          </Container>
          <Container className="h-full flex justify-end items-center w-auto xl:w-[300px] 2xl:w-[350px]">
            <HeaderLoginColumnComp
              authFn={authFn}
              cartFn={
                cartFn || (() => ({ cartItems: [], reloadCartData: () => {} }))
              }
              templateFn={templateFn}
              pathname={pathname}
              ImageComponent={ImageComponent}
              LinkComponent={LinkComponent}
              authWrapper={authWrapper}
              removeProductFromCartFn={removeProductFromCartFn}
              applicationData={applicationData}
            />
          </Container>
        </div>
      </header>
    </FixedHeaderControl>
  );
};

export default HeaderSection;
