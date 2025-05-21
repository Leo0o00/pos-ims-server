import { ValidationError } from 'class-validator'; // Asegúrate de tener class-validator instalado

/**
 * Formatea recursivamente los errores de validación de class-validator.
 * Esta función es extraída de tu main.ts.
 * @param validationErrors Array de errores de validación.
 * @param parentProperty Nombre de la propiedad padre (para errores anidados).
 * @returns Un array de objetos con la propiedad y sus errores.
 */
export const getPrettyClassValidatorErrors = (
  validationErrors: ValidationError[],
  parentProperty = '',
): Array<{ property: string; errors: string[] }> => {
  const errors: Array<{ property: string; errors: string[] }> = [];

  // Función interna recursiva para manejar errores anidados
  const getValidationErrorsRecursively = (
    currentValidationErrors: ValidationError[], // Renombrado para evitar shadowing
    currentParentProperty = '', // Renombrado para evitar shadowing
  ) => {
    for (const error of currentValidationErrors) {
      const propertyPath = currentParentProperty
        ? `${currentParentProperty}.${error.property}`
        : error.property;

      if (error.constraints) {
        errors.push({
          property: propertyPath,
          errors: Object.values(error.constraints),
        });
      }

      // Si hay errores hijos (validación anidada), procesarlos recursivamente
      if (error.children?.length) {
        getValidationErrorsRecursively(error.children, propertyPath);
      }
    }
  };

  getValidationErrorsRecursively(validationErrors, parentProperty);
  return errors;
};

/**
 * Crea el payload estándar para una BadRequestException debido a errores de validación.
 * @param validationErrors Array de errores de validación.
 * @returns El objeto de payload para la excepción.
 */
export const createValidationExceptionPayload = (
  validationErrors: ValidationError[] = [],
): {
  statusCode: number;
  message: string;
  errors: Array<{ property: string; errors: string[] }>;
} => {
  const formattedErrors = getPrettyClassValidatorErrors(validationErrors);
  return {
    statusCode: 400, // HttpStatus.BAD_REQUEST
    message: 'Validation error', // Mensaje consistente
    errors: formattedErrors,
  };
};
