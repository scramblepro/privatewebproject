export type Skill = {
  id: string;
  name: string;
  level: number;
  sortOrder: number;
};

export type SkillDto = {
  id: string;
  name: string;
  level: number;
  sort_order?: number;
};
