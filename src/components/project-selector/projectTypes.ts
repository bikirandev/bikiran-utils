export type TProjectService = {
  id: number;
  projectId: string;
  title: string;
  content: string;
};
export type TProject = {
  id: number;
  title: string;
  faviconUrl: string;
  contactName: string;
  email: string;
  phone: string;
  note: string;
  domain: string;
  projectOwner: boolean;
  permissionRole: string;
  status: string;
  permissionStatus: string;
  scopes: string[];
  isDefault: boolean;
};
