import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'user/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
  ],
  controllers: [ AuthController ],
  providers: [ AuthService, JwtStrategy ],
})
export class AuthModule {}
