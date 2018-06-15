import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from './jwt-Payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
    });
  }

  // tslint:disable-next-line:ban-types
  async validate(payload: JwtPayload, done: Function, context: ExecutionContext) {
    const user = await this.authService.validateUser(payload);

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}