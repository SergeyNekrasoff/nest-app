import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(payload: User): Promise<{
        access_token: string;
    }>;
    signUp(payload: User): Promise<{
        access_token: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    getProfile(req: any): any;
}
