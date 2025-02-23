export type TNavSubMenu = {
  id: string;
  title: string;
  details: string;
  path: string;
  icon: string;
};

export type TNavMenu = {
  id: string;
  title: string;
  path: string | string[];
  icon: string;
  subMenu?: TNavSubMenu[];
};
