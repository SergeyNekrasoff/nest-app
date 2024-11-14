import { jwtConstants } from './../constants';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  // async validate(payload: any) {
  //   const user = await this.usersService.findById(payload.sub)

  //   console.log(`jwt.strategy.ts payload: ${JSON.stringify(payload)}`)
  //   console.log(`jwt.strategy.ts validate: ${JSON.stringify(user)}`)

  //   if (!user) {
  //     throw new UnauthorizedException()
  //   }

  //   return user
  // }

  async validate(payload: any) {
    return payload
  }
}