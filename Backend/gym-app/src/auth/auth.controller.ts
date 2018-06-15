import { Get, Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtResponse } from './jwt.response';
import { LoginUser } from 'user/dto/loginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async login(@Body() loginUser: LoginUser): Promise<JwtResponse[]> {
    return await this.authService.createToken(loginUser);
  }
}
