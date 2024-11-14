import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(payload: CreateAuthDto): Promise<{
        access_token: string;
    }>;
    signUp(payload: CreateUserDto): Promise<any>;
    logout(): Promise<{
        message: string;
    }>;
    getProfile(req: any): any;
}
