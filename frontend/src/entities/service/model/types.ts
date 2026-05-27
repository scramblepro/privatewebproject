export type ServiceIconId =
  | "frontend"
  | "backend"
  | "uiux"
  | "crm"
  | "automation"
  | "landing";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
  sortOrder: number;
};
