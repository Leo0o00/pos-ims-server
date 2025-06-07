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
  PRODUCT_BY_ID: (id: string) => `products:item:${id}`,
  PROVIDERS_BY_ID: (id: string) => `providers:item:${id}`,
  PROVIDERS_LIST: (page: number, limit: number, query?: string) =>
    `providers:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  PURCHASES_BY_ID: (id: string) => `purchases:item:${id}`,
  PURCHASES_LIST: (page: number, limit: number, query?: string) =>
    `purchases:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
  SALES_BY_ID: (id: string) => `sales:item:${id}`,
  SALES_LIST: (
    page: number,
    limit: number,
    query?: string,
    dateFrom?: string,
    dateTo?: string,
    minTotal?: number,
    maxTotal?: number,
    includeDeleted?: boolean,
  ) =>
    `sales:list:page=${page}:limit=${limit}:query=${query || 'none'}:dateFrom=${dateFrom || 'none'}:dateTo=${dateTo || 'none'}:minTotal=${minTotal || 'none'}:maxTotal=${maxTotal || 'none'}:includeDeleted=${includeDeleted || 'none'}`,
  USERS_BY_ID: (id: string) => `users:item:${id}`,
  USERS_BY_EMAIL: (email: string) => `users:item:${email}`,
  USERS_LIST: (page: number, limit: number, query?: string) =>
    `users:list:page=${page}:limit=${limit}:query=${query || 'none'}`,
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
