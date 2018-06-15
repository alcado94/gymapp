import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Activity]) ],
  controllers: [ ActivityController ],
  providers: [ ActivityService ],
})
export class ActivityModule {}