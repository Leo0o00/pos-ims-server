import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
import { APIResponseInterceptor } from './common/interceptors/api-response-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,PATCH,POST,DELETE',
    credentials: true,
  })
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const getPrettyClassValidatorErrors = (
          validationErrors: ValidationError[],
          parentProperty = '',
        ): Array<{ property: string; errors: string[] }> => {
          const errors: Array<{ property: string; errors: string[]}> = [];

          const getValidationErrorsRecursively = (
            validationErrors: ValidationError[],
            parentProperty = '',
          ) => {
            for (const error of validationErrors) {
              const propertyPath = parentProperty
                ? `${parentProperty}.${error.property}`
                : error.property;

              if (error.constraints) {
                errors.push({
                  property: propertyPath,
                  errors: Object.values(error.constraints),
                });
              }

              if (error.children?.length) {
                getValidationErrorsRecursively(error.children, propertyPath);
              }
            }
          };

          getValidationErrorsRecursively(validationErrors, parentProperty);

          return errors;
        };

        const errors = getPrettyClassValidatorErrors(validationErrors);

        return new BadRequestException({
          message: 'Validation error',
          errors: errors,
        });
      },

    })
  );
  app.useGlobalInterceptors(new APIResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
