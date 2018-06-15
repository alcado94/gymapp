import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { decodeToken } from 'core/helpers/decodeToken.helper';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const user = decodeToken(request);
    const hasRole = () => roles.includes(user.rol);
    return user && user.rol && hasRole();
  }
}