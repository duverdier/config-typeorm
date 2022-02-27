import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const { version } = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  const config = new DocumentBuilder()
    .setTitle('config example')
    .setDescription('The config TYPEORM API description')
    .setVersion(version)
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT);
}
bootstrap();
