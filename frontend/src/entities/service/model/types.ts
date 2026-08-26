export type ServiceIconId =
  | "frontend"
  | "backend"
  | "uiux"
  | "crm"
  | "automation"
  | "landing"
  | "ai"
  | "chat"
  | "audit";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
  sortOrder: number;
};
