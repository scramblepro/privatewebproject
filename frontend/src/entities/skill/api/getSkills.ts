import { API_BASE_URL } from "../../../shared/config/api";
import { FALLBACK_SKILLS } from "../model/fallbackSkills";
import type { Skill, SkillDto } from "../model/types";
import { normalizeSkill, sortSkills } from "../lib/normalizeSkill";

export const getSkills = async (): Promise<Skill[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/skills`);

    if (!res.ok) {
      return sortSkills(FALLBACK_SKILLS);
    }

    const data = (await res.json()) as SkillDto[];
    return sortSkills(data.map(normalizeSkill));
  } catch {
    return sortSkills(FALLBACK_SKILLS);
  }
};
