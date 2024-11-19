import { AuthService } from './../auth.service';
import { Strategy } from "passport-jwt";
import { CreateAuthDto } from '../dto/create-auth.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: CreateAuthDto): Promise<import("../../users/entities/user.entity").User>;
}
export {};
