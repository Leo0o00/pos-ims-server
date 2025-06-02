export const CACHE_KEYS = {
  METRICS: 'metrics',
  EMPLOYEES_BY_ID: (id: string) => `employees:item:${id}`,
  EMPLOYEES_LIST: (page: number, limit: number, query?: string) =>
    `employees:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  PRODUCT_BY_ID: (id: string) => `product:item:${id}`,
  PRODUCTS_PAGINATED: (
    page: number,
    limit: number,
    query?: string,
    category?: string /* otros filtros */,
  ) =>
    `products:list:page=${page}:limit:${limit}:q:${query || 'none'}:cat:${category || 'none'}`,
  ALL_CATEGORIES: 'categories:all',
  // Añade más claves según necesites
};

export const CACHE_TTL = {
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  TEN_MINUTES: 10 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  EIGHT_HOURS: 8 * 60 * 60 * 1000,
  // Añade más TTLs predefinidos
};
