import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './jwt-Payload.interface';
import { LoginUser } from 'user/dto/loginUser.dto';
import { UserService } from 'user/user.service';
import { User } from 'user/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async createToken(loginUser: LoginUser) {
        if (loginUser.email && loginUser.pass){
            const userData: User = await this.userService.login(loginUser);
            const rolUser: any = await this.userService.fetchRolbyUser(loginUser.email);
            const user: JwtPayload = { email: userData.email, rol: rolUser[0].nameRol };
            const expiresIn = 3600;
            const jw = jwt.sign(user, 'secretKey', { expiresIn: 3600 });
            return [jw , rolUser[0]];
        }else{
            // tslint:disable-next-line:no-console
            console.log('Request Mal realizada');
        }
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.checkUser(payload.email);
    }
}
