// decorators/is-buffer.decorator.ts
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator } from 'class-validator';

@ValidatorConstraint({ name: 'isBuffer' })
export class IsBufferConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return value instanceof Buffer;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Property $property must be a buffer.';
  }
}

// Decorador para usar en DTOs
export function IsBuffer() {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      validator: IsBufferConstraint,
    });
  };
}