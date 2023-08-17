import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';

async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
  new ValidationPipe({

    transform : true,
    whitelist: true,
    forbidNonWhitelisted: true
  
  })
  )

  
  const config = new DocumentBuilder()
    .setTitle('Store')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Thomaz Store')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000, ()=> console.log('server running'));
}
bootstrap();
