import { useEffect, useState } from "react";
import { getSkills } from "../api/getSkills";
import type { Skill } from "./types";

type UseSkillsResult = {
  skills: Skill[];
  isLoading: boolean;
};

export const useSkills = (): UseSkillsResult => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getSkills()
      .then((data) => {
        if (!cancelled) {
          setSkills(data);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { skills, isLoading };
};
