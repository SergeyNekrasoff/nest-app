import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// export class JwtAuthGuard implements CanActivate {
export class JwtAuthGuard extends AuthGuard('jwt') {
  // constructor(
  //   private reflector: Reflector,
  //   private jwtService: JwtService,
  // ) {}

  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const roles = this.reflector.get<string[]>('roles', context.getHandler());

  //   if (!roles) {
  //     return true;
  //   }

  //   const request = context.switchToHttp().getRequest();
  //   const token = request.headers.authorization;

  //   try {
  //     const decoded = this.jwtService.verify(token);
  //     request.user = decoded;
  //     return true; 
  //   } catch (error) {
  //     throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //   }
  // }
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext): boolean {
    const requireAuth = this.reflector.getAllAndOverride('requireAuth', [
      context.getClass(),
      context.getHandler(),
    ])

    if (requireAuth && !this.isAuth(context)) {
      throw new UnauthorizedException()
    }

    return true
  }

  private isAuth(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const bearerToken = request.headers['authorization']

    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
      return false
    }

    const token = bearerToken.slice(7)

    return true
  }
}