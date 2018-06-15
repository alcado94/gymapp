
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'auth/jwt-Payload.interface';

export function decodeToken(request: any): JwtPayload {
    const token = !!request.headers && !!request.headers.authorization
        ? request.headers.authorization.split(' ')[1]
        : null;
    return !!token ? jwt.decode(token) : null;
}