import { Get, Controller, Post, Body, Delete, Param, Put, UseGuards, ReflectMetadata } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUser } from './dto/User.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/Roles/roles.decorator';

@Controller('user')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles('Admin')
  findall(): Promise<User[]> {
    return this.userService.findall();
  }

  @Get(':id')
  @Roles('Admin')
  find(@Param('id') id): Promise<User[]> {
    return this.userService.find(id);
  }

  @Post()
  @Roles('Admin')
  add(@Body() createUser: CreateUser): Promise<User> {
    return this.userService.create(createUser);
  }

  @Put(':id')
  @Roles('Admin')
  modify(@Param('id') id, @Body() createUser: CreateUser): Promise<UpdateResult> {
    return this.userService.modify(createUser, id);
  }

  @Delete(':id')
  @Roles('Admin')
  delete(@Param('id') id): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
