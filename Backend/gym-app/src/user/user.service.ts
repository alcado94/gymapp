import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { LoginUser } from './dto/loginUser.dto';
import { CreateUser } from './dto/User.dto';

@Injectable()
export class UserService {

    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
    ) {}

    async login(login: LoginUser): Promise<User>{
      return await this.userRepository.findOneOrFail(login);
    }

    async findall(): Promise<User[]>{
      return await this.userRepository.find();
    }

    async find(id): Promise<User[]>{
      return await this.userRepository.findByIds(id);
    }

    async create(createUser: CreateUser): Promise<User>{
      return await this.userRepository.save(createUser);
    }

    async modify(req: CreateUser, id: number): Promise<UpdateResult> {
      return await this.userRepository.update(id, req);
  }

    async delete(id): Promise<DeleteResult>{
      return await this.userRepository.delete(id);
    }

    async checkUser(email): Promise<User>{
      return await this.userRepository.findOneOrFail({ where: { email } });
    }

    async fetchRolbyUser(email): Promise<string>{
      // tslint:disable-next-line:max-line-length
      return await this.userRepository.query('SELECT roles.nameRol FROM user,roles,roles_users ' +
        'WHERE user.iduser = roles_users.idUser ' +
        'AND roles_users.idRoles = roles.idrol ' +
        'AND user.email = ?', [email]);
    }
}
