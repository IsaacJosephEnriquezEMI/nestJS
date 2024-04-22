import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Smart Invoice Customer Portal')
    .setDescription('API for E-Invoice with Smart Invoice Integration')
    .setVersion('1.0')
    .addTag('E-Invoicing')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log(
    `Application is running on http://localhost:${process.env.PORT}/api`,
  );
}
bootstrap();
