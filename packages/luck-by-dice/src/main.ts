// used in development
import {writeFileSync} from 'fs';
import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('@org-packages/luck-by-dice')
    .setDescription(
      'An API for simulating dice rolls and luck from dice notation',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // update the openapi-spec
  writeFileSync('./openapi-spec.json', JSON.stringify(document));

  await app.listen(3000);
}
bootstrap();
