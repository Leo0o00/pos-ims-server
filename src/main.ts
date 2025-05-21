import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
import { APIResponseInterceptor } from './common/interceptors/api-response-interceptor';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { createValidationExceptionPayload } from './common/utils/validation-error.formatter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,PATCH,POST,DELETE',
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errorPayload = createValidationExceptionPayload(validationErrors);

        return new BadRequestException(errorPayload);
      },
    }),
  );
  const reflector = app.get(Reflector); // Obtiene la instancia de Reflector
  app.useGlobalGuards(new JwtAuthGuard(reflector)); // Aplica JwtAuthGuard globalmente

  // Opcional: Aplicar RolesGuard globalmente si la mayoría de las rutas lo necesitan
  // y luego usar @Public o lógica específica para rutas que no requieren roles.
  app.useGlobalGuards(new RolesGuard(reflector)); // Si lo haces global, JwtAuthGuard debe ir primero

  app.useGlobalInterceptors(new APIResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Point of Sales Inventory Management System API')
    .setDescription('Web API for Point of Sales Inventory Management System')
    .setVersion('1.0')
    .addGlobalResponse({
      status: 500,
      description: 'Unexpected internal server error.',
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
