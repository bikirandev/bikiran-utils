"use client";
import { FC, useState } from "react";
import ServicesPopup from "../services-popup/ServicesPopup";
import ProfileManage from "../Profile/ProfileManage";
import HeaderServiceBtnComp from "./HeaderServiceBtnComp";
// import { useCart } from "@/bik-lib/context/cart/CartProvider";
// import { useAuth2 } from "@/bik-lib/context/auth/Auth2Provider";
// import { useTemplate } from "@/bik-lib/context/template/TemplateProvider";
// import { usePathname } from "next/navigation";
// import { ApiDeleteCartItem } from "@/bik-lib/context/cart/CartOperation";
// import ProfileManage from "@/bik-lib/features/Profile/ProfileManage";
// import HeaderServiceBtnComp from "./HeaderServiceBtnComp";
// import HeaderMenuNotificationComp from "./HeaderMenuNotificationComp";
// import CartMenu from "@/bik-lib/features/cart-sidebar/CartMenu";

type THeaderLoginComp = {
  cartFn: () => {
    cartItems: any[];
    reloadCartData: () => void;
  };
  authFn: () => {
    authInfo: any;
    logOut: () => void;
    loginUrl: string;
  };
  templateFn: () => {
    setMessage: (message: string) => void;
    setConfirm: (confirm: any) => void;
    setTemplateLoading: (loading: boolean) => void;
  };
  removeProductFromCartFn?: (productId: number) => void;
  pathname: string;
  ImageComponent: any;
  LinkComponent: any;
  authWrapper: any;
  applicationData: any;
};

const HeaderLoginColumnComp: FC<THeaderLoginComp> = ({
  cartFn,
  authFn,
  templateFn,
  pathname,
  ImageComponent,
  LinkComponent,
  removeProductFromCartFn,
  authWrapper,
  applicationData,
}) => {
  const { cartItems, reloadCartData } = cartFn();
  const { authInfo, logOut, loginUrl } = authFn();
  const { setMessage, setConfirm, setTemplateLoading } = templateFn();

  // const removeProductFromCart = (productId: number) => {
  //   setConfirm({
  //     show: true,
  //     text: "Are you sure you want to remove this item from cart?",
  //     textCancel: "No",
  //     txtAction: "Yes",
  //     textActionCname: "!bg-primary-100 !text-primary",

  //     clickAction: () => {
  //       setMessage("Removing...");
  //       setTemplateLoading(true);
  //       ApiDeleteCartItem(authInfo, productId)
  //         .then(({ message }) => {
  //           setMessage(message);
  //           reloadCartData();
  //         })
  //         .catch((err: Error) => {
  //           setMessage(err.message);
  //         })
  //         .finally(() => {
  //           setTemplateLoading(false);
  //           setConfirm(null);
  //         });
  //     },
  //   });
  // };

  return (
    <ul className="flex items-center justify-end  gap-3.5 lg:gap-4">
      {/* {!authInfo.error && !authInfo.loading && windowWidth > SIZE_MD && (
        <li >
          <Button
            title={"Manage Domain"}
            variant="secondary-line"
            className="px-3 py-2"
          />
        </li>
      )} */}

      <li>{/* <HeaderMenuNotificationComp /> */}</li>
      {pathname !== "/cart" ? (
        <li className="flex -mx-1">
          {/* <CartMenu data={cartItems} removeProduct={removeProductFromCart} /> */}
        </li>
      ) : null}
      <li className="-mx-1">
        <HeaderServiceBtnComp
          ImageComponent={ImageComponent}
          LinkComponent={LinkComponent}
          applicationData={applicationData}
          authInfo={authInfo}
        />
      </li>
      <li>
        <ProfileManage
          authFn={authFn}
          AuthCompWrapper={authWrapper}
          LinkComponent={LinkComponent}
          ImageComponent={ImageComponent}
        />
      </li>
    </ul>
  );
};

export default HeaderLoginColumnComp;
