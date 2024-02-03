// used in lambda
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import { Context, Handler } from 'aws-lambda';
import express from 'express';

import { AppModule } from './app.module';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    const binaryMimeTypes = ['application/pdf', 'application/octet-stream'];
    const contentTypes = binaryMimeTypes;

    nestApp.enableVersioning({
      type: VersioningType.HEADER,
      header: 'Accept-Version',
      defaultVersion: '1',
    });

    nestApp.enableCors();

    await nestApp.init();

    cachedServer = serverlessExpress({
      app: expressApp,
      binarySettings: { contentTypes },
      binaryMimeTypes,
    });
  }

  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  const server = await bootstrap();
  return server(event, context, callback);
};
