import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from 'activity/activity.module';
import { Connection } from 'typeorm';
import { AuthModule } from 'auth/auth.module';
import { UserModule } from 'user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'auth/roles/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ActivityModule,
    AuthModule,
    UserModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
