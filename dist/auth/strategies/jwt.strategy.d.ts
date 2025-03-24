import { Strategy } from "passport-jwt";
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersServices;
    constructor(usersServices: UsersService);
    validate(payload: User): Promise<User>;
}
export {};
