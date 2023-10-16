import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import dataSource from './database/config/database-cli';
import { INestApplication, ValidationPipe } from '@nestjs/common';

dataSource.initialize().then(() => {
    console.log('Database connected');
});

async function bootstrap() {
    const app = await NestFactory.create<INestApplication>(AppModule.register(), {
        bufferLogs: true,
    });
    app.flushLogs();
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Store')
        .setDescription('')
        .setVersion('1.0')
        .addTag('Thomaz Store')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(3000, () => console.log('server running'));
    const url = await app.getUrl();
    console.log(`Swagger application is running on: ${url}/swagger`);
}
bootstrap();
