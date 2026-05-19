import type { Skill, SkillDto } from "../model/types";
import { clampSkillLevel } from "./clampSkillLevel";

export const normalizeSkill = (dto: SkillDto): Skill => ({
  id: dto.id,
  name: dto.name,
  level: clampSkillLevel(Number(dto.level)),
  sortOrder: dto.sort_order ?? 0,
});

export const sortSkills = (skills: Skill[]): Skill[] =>
  [...skills].sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
