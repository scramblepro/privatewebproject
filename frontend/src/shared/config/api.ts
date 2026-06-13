/** Пустая строка = same-origin (nginx проксирует /projects, /skills, /messages). */
const DEFAULT_API_BASE = "";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? DEFAULT_API_BASE;
