import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AudioPlayerModule } from './module/audio-player/audio-player.module';
import { HealthModule } from './module/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
    }),
    HealthModule,
    AudioPlayerModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
