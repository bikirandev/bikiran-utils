import React, { FC } from "react";
import {
  ActivityHistoryIcon,
  BillingInfoIcon,
  NotificationIcon,
  ContactSupportIcon,
} from "./icons";
import { getAccountUrl, getSupportUrl } from "../../lib/utils/Env";
import style from "./style/ProfileMenuList.module.css";
import { cn } from "../../lib/utils/cn";

const billingSubmenu = [
  {
    title: "Invoice",
    link: "/user/billing/invoice",
  },
  {
    title: "Payments",
    link: "/user/billing/payment",
  },
  {
    title: "Subscription",
    link: "/user/subscriptions",
  },
];

type TMenu = {
  path?: string;
  fullPath?: string;
  target?: string;
  icon: React.ReactNode;
  title: string;
  notifCount?: number;
  className: string;
  LinkComponent: any;
};

const OptionBilling: FC<{ LinkComponent: any }> = ({ LinkComponent }) => {
  return (
    <div className={cn(style.optionBillingContainer, "optionBillingContainer")}>
      <div className={cn("billingIcon", style.billingIcon)}>
        <BillingInfoIcon />
      </div>
      <div className="">
        <div className={cn("billingText", style.billingText)}>
          Billings Information
        </div>
        <div className={cn("linkContainer ML", style.linkContainer)}>
          {billingSubmenu.map(({ title, link }, index) => {
            return (
              <LinkComponent
                key={title}
                href={`${getAccountUrl()}${link}`}
                target="_blank"
                className={cn("billingSubmenuLinks", style.billingSubmenuLinks)}
              >
                {index !== 0 && <span>&bull; &nbsp;</span>}
                {title}

                {/* Notification Bullet point */}
                {/* <span className="size-1.5 bg-warning rounded-full absolute top-[2px] -right-1 " /> */}
              </LinkComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Option: React.FC<TMenu> = ({
  path,
  fullPath,
  icon,
  title,
  notifCount,
  className,
  LinkComponent,
}) => {
  const href = fullPath !== undefined ? fullPath : `${getAccountUrl()}/${path}`;

  return (
    <LinkComponent
      href={href}
      target="_blank"
      className={cn("optionLink group", className, style.optionLink)}
    >
      <span className={cn("optionIcon", style.optionIcon)}>{icon}</span>
      <span className={cn("optionTitle", style.optionTitle)}>{title}</span>

      {notifCount !== undefined && (
        <div className={cn("badge", style.badge)}>
          <span className={cn("badgeSpan", style.badgeSpan)}>15</span>
        </div>
      )}
    </LinkComponent>
  );
};

const ProfileMenuList: FC<{ LinkComponent: any }> = ({ LinkComponent }) => {
  return (
    <div className={cn("menuSection", style.menuSection)}>
      <Option
        path="user/activities"
        icon={<ActivityHistoryIcon />}
        title="Activity History"
        className={cn("firstOption", style.firstOption)}
        LinkComponent={LinkComponent}
      />
      <Option
        path="user/notifications"
        icon={<NotificationIcon />}
        title="Notifications"
        className={cn("secondOption", style.secondOption)}
        LinkComponent={LinkComponent}
      />
      <OptionBilling LinkComponent={LinkComponent} />
      <Option
        fullPath={getSupportUrl()}
        icon={<ContactSupportIcon />}
        title="Contact Support"
        className={cn("lastOption", style.lastOption)}
        LinkComponent={LinkComponent}
      />
    </div>
  );
};

export default ProfileMenuList;
