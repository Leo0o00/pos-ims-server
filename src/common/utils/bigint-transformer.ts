export const transformBigInt = (data: any): any => {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === 'bigint') {
    return Number(data);
  }

  if (Array.isArray(data)) {
    return data.map(transformBigInt);
  }

  if (typeof data === 'object') {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, transformBigInt(value)]),
    );
  }

  return data;
};
