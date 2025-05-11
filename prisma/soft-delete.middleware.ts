// prisma/middleware/soft-delete.middleware.ts
import { Prisma } from '@prisma/client';

export const softDeleteMiddleware: Prisma.Middleware = async (params, next) => {
  // Define los modelos que usarán soft delete (usa los nombres exactos de tu schema.prisma, ej: "Sales")
  const softDeleteModels = ['Sales', 'User']; // Asegurarse que 'Sales' sea el nombre exacto del modelo definido en schema.prisma

  if (params.model && softDeleteModels.includes(params.model)) {
    // --- Manejo de operaciones de eliminación ---
    if (params.action === 'delete') {
      // Cambia la acción de 'delete' a 'update'
      params.action = 'update';
      // params.args ya contiene el 'where' de la operación 'delete' original.
      // Agregamos el campo 'data' para la actualización.
      params.args.data = { ...params.args.data, deleted_at: new Date() };
    } else if (params.action === 'deleteMany') {
      // Cambia la acción de 'deleteMany' a 'updateMany'
      params.action = 'updateMany';
      // params.args ya contiene el 'where' (si se proveyó) de la operación 'deleteMany' original.
      // Agregamos o modificamos el campo 'data' para la actualización.
      if (params.args.data !== undefined) {
        params.args.data.deleted_at = new Date();
      } else {
        params.args.data = { deleted_at: new Date() };
      }
    }

    // --- Manejo de operaciones de búsqueda para excluir registros eliminados ---
    // Cubre findUnique, findFirst, findMany, findUniqueOrThrow, findFirstOrThrow
    if (
      params.action.startsWith('find') ||
      params.action === 'count' ||
      params.action === 'aggregate' ||
      params.action === 'groupBy'
    ) {
      // Solo modifica 'where' si 'deleted_at' no está ya explícitamente definido en la consulta.
      // Esto permite poder buscar registros eliminados de ser necesario (ej: where: { deleted_at: { not: null } }).
      if (params.args.where) {
        if (params.args.where.deleted_at === undefined) {
          params.args.where.deleted_at = null;
        }
      } else {
        params.args.where = { deleted_at: null };
      }
    }
  }

  return next(params);
};
