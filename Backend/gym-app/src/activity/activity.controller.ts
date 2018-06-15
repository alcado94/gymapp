import { Get, Controller, Post, Body, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';
import { CreateActivityDto } from './dto/createActivity.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/Roles/roles.decorator';

@Controller('activity')
@UseGuards(RolesGuard)
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  findAll(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<Activity[]> {
    return this.activityService.find(id);
  }

  @Get('best')
  best(): Promise<Activity[]> {
    return this.activityService.best();
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('Admin')
  edit(@Param('id') id, @Body() createActivityDto: CreateActivityDto){
    return this.activityService.modify(createActivityDto, id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('Admin')
  add(@Body() createActivityDto: CreateActivityDto): Promise<Activity> {
    return this.activityService.create(createActivityDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('Admin')
  delete(@Param('id') id){
    return this.activityService.delete(id);
  }
}
