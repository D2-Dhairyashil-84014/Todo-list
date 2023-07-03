import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var corsOptions = {
    origin: 'http://localhost:3001/',
    credentials: true // <-- REQUIRED backend setting
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
