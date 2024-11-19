import { AuthService } from './../auth.service';
import { jwtConstants } from './../constants';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { CreateAuthDto } from '../dto/create-auth.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: CreateAuthDto) {
    const user = await this.authService.validateUser(payload.email, payload.password)
    
    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}