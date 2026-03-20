const base = import.meta.env.BASE_URL ?? "/";

const normalizedBase = base === "/" ? "" : base.endsWith("/") ? base.slice(0, -1) : base;

export function withBase(path: string) {
  if (!path || path === "/") {
    return normalizedBase || "/";
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
