export const filtersToQueryParams = (filters: any): string => {
  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) => !filterKeysToRemove.includes(key)),
  );

  const params = Object.entries(cleanedFilters)
    .map(([key, value]) => {
      if (!value) return null;

      const formattedValue = Array.isArray(value)
        ? value.map((v: string) => v.replace(/\s+/g, "_")).join(`&${key}[]=`)
        : (value as string).replace(/\s+/g, "_");

      return `${Array.isArray(value) ? `${key}[]` : key}=${formattedValue}`;
    })
    .filter(Boolean)
    .join("&");

  return params ? `&${params}` : "";
};

export const filtersToUrlQueryParams = (filters: Record<string, any>): string => {
  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) => !filterKeysToRemove.includes(key)),
  );

  const params = Object.entries(cleanedFilters)
    .map(([key, value]) => {
      if (!value) return null;

      const formattedValue = Array.isArray(value)
        ? value.map((v: string) => v.replace(/\s+/g, "_")).join(`&${key}[]=`)
        : (value as string).replace(/\s+/g, "_");

      return `${Array.isArray(value) ? `${key}[]` : key}=${formattedValue}`;
    })
    .filter(Boolean)
    .join("&");

  return params ? `?${params}` : "";
};

const filterKeysToRemove: string[] = [];
