export const CACHE_KEYS = {
  METRICS: 'metrics',
  EMPLOYEES_BY_ID: (id: string) => `employees:item:${id}`,
  EMPLOYEES_LIST: (page: number, limit: number, query?: string) =>
    `employees:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  POINT_OF_SALES_LIST: (page: number, limit: number, query?: string) =>
    `point_of_sales:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  POINT_OF_SALES_BY_ID: (id: string) => `point_of_sales:item:${id}`,
  PRODUCTS_CATEGORIES_LIST: (page: number, limit: number, query?: string) =>
    `products_categories:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  PRODUCTS_CATEGORIES_BY_ID: (id: string) => `products_categories:item:${id}`,
  PRODUCTS_LIST: (
    page: number,
    limit: number,
    query?: string,
    minStock?: number,
    minPrice?: number,
    maxPrice?: number,
  ) =>
    `products:list:page=${page}:limit=${limit}:query=${query || 'none'}:minStock=${minStock || 'none'}:minPrice=${minPrice || 'none'}:maxPrice=${maxPrice || 'none'}`,
  PRODUCT_BY_ID: (id: string) => `product:item:${id}`,
  // Añade más claves según necesites
};

export const CACHE_TTL = {
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  TEN_MINUTES: 10 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  EIGHT_HOURS: 8 * 60 * 60 * 1000,
  // Añade más TTL predefinidos
};
