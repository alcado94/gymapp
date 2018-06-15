import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateActivityDto } from './dto/createActivity.dto';

@Injectable()
export class ActivityService {

    constructor(
        @InjectRepository(Activity)
        private readonly activityRepository: Repository<Activity>,
    ) {}

    async findAll(): Promise<Activity[]> {
        return await this.activityRepository.find();
    }

    async find(id): Promise<Activity[]> {
        return await this.activityRepository.findByIds(id);
    }

    async best(): Promise<Activity[]> {
        return await this.activityRepository.find({take: 3});
    }

    async create(req: CreateActivityDto): Promise<Activity> {
        return await this.activityRepository.save(req);
    }

    async modify(req: CreateActivityDto, id: number): Promise<UpdateResult> {
        return await this.activityRepository.update(id, req);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.activityRepository.delete(id);
    }
}
