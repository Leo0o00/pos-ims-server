import {
  BadRequestException,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  ValidationError,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { LoginDto } from '../dto/login.dto';
import { createValidationExceptionPayload } from 'src/common/utils/validation-error.formatter';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const body = request.body;

    // 1. Transformar el body de la petición a una instancia de LoginDto
    // Esto es importante para que los decoradores de class-validator funcionen correctamente.
    const loginDto = plainToInstance(LoginDto, body);

    // 2. Validar la instancia de LoginDto
    const errors: ValidationError[] = await validate(loginDto, {
      // Opciones de validación (opcionales, pero recomendadas para consistencia con ValidationPipe global):
      whitelist: true, // Remueve propiedades que no están en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas en el DTO
      // skipMissingProperties: false, // Por defecto es false, asegura que se validen propiedades opcionales si están presentes
    });

    // 3. Si hay errores de validación, lanzar una excepción BadRequestException
    if (errors.length > 0) {
      // Usa la función de utilidad para crear el payload del error
      const errorsPayload = createValidationExceptionPayload(errors);

      // Lanza la BadRequestException con el payload formateado
      throw new BadRequestException(errorsPayload);
    }

    // 4. Si la validación del DTO es exitosa, proceder con la autenticación de Passport (LocalStrategy)
    // `super.canActivate(context)` llamará a la LocalStrategy.
    // Este método devuelve un booleano o una Promesa<booleano>.
    // También puede lanzar excepciones (ej. UnauthorizedException) si la autenticación falla.
    try {
      return (await super.canActivate(context)) as boolean;
    } catch (error) {
      // Si super.canActivate() o la estrategia lanzan una excepción (ej. UnauthorizedException),
      // la relanzamos para que sea manejada por el filtro de excepciones global de NestJS.
      // AuthGuard por defecto ya maneja esto convirtiendo errores de estrategia en excepciones HTTP.
      if (error instanceof BadRequestException) {
        // Si es un BadRequestException, lo lanzamos tal cual.
        throw error;
      } else {
        // Si no, lo convertimos en un InternalServerErrorException con un mensaje genérico.
        throw new InternalServerErrorException(
          'Fallo en la estrategia de autenticación.',
        );
      }
    }

    // El método handleRequest de AuthGuard se llama después de que la estrategia se ejecuta.
    // Por defecto, si la estrategia devuelve un error o un usuario falso, lanza UnauthorizedException.
    // No necesitamos sobrescribirlo aquí si el comportamiento por defecto es suficiente después
    // de nuestra validación de DTO.
    // handleRequest(err, user, info, context, status) {
    //   if (err || !user) {
    //     throw err || new UnauthorizedException('Fallo en handleRequest después de la estrategia.');
    //   }
    //   return user;
    // }
  }
}
