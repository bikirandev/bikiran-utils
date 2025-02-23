// "use client";
// import Image from "next/image";
// import { icons } from "@/bikiran/lib/icons";
// import { basic } from "@/bikiran/utils/Images";
// import { cn } from "@/bik-lib/utils/cn";
// import { useAuth2 } from "@/bik-lib/context/auth/Auth2Provider";
// import React from "react";

// type TButtonPrimary = {
//   title: string;
//   className: string;
//   onClick: any;
//   variant: string;
// };

// const ButtonPrimary: React.FC<TButtonPrimary> = ({
//   title,
//   className,
//   onClick,
//   variant = "outline",
// }) => {
//   return (
//     <button
//       type="button"
//       className={cn(
//         "rounded-[7px] py-2.5 px-7 text-base font-medium",
//         className,
//         {
//           "bg-secondary text-white": variant === "fill",
//           "bg-secondary-100 text-secondary": variant === "outline",
//         }
//       )}
//       onClick={onClick}
//     >
//       <span>{title}</span>
//     </button>
//   );
// };

// function Body() {
//   const { authInfo: currentUser } = useAuth2();
//   // if (!currentUser?.loginStatus) {
//   //   return (
//   //     <div className="flex justify-center items-end">
//   //       <ButtonPrimary
//   //         variant=""
//   //         title="Login"
//   //         // onClick={() => makeAction('sign-in')}
//   //         onClick={null}
//   //         className="py-2 px-14"
//   //       />
//   //     </div>
//   //   );
//   // }
//   return (
//     <div className="sidebar_user_info">
//       <div className="size-10">
//         <Image
//           src={basic.imgAvatar}
//           alt="Avatar"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="size-full rounded-full"
//         />
//       </div>
//       {/* <div>
//         <h3 className="user_name">
//           {currentUser?.displayName || <span>[Not Set]</span>}
//         </h3>
//         <p className="user_email">
//           {currentUser?.email || <span>[Not Set]</span>}
//         </p>
//       </div> */}
//     </div>
//   );
// }

// type TSidebarTopRow = {
//   closeMenu: any;
// };

// const SidebarTopRow: React.FC<TSidebarTopRow> = ({ closeMenu }) => {
//   return (
//     <div className="relative pl-5 pt-18 pb-4 border-b border-primary-100">
//       <button
//         type="button"
//         className="block w-8 absolute top-4 left-4"
//         onClick={closeMenu}
//       >
//         <Image
//           src={icons.iconBack}
//           alt="arrow"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="w-full h-auto"
//         />
//       </button>

//       <Body />
//     </div>
//   );
// };

// export default SidebarTopRow;
