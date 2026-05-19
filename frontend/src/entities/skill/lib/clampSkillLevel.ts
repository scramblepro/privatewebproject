import {
  SKILL_LEVEL_MAX,
  SKILL_LEVEL_MIN,
} from "../model/constants";

export const clampSkillLevel = (level: number): number =>
  Math.min(SKILL_LEVEL_MAX, Math.max(SKILL_LEVEL_MIN, level));
