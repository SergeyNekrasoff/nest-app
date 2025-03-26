import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { TypedEventEmitter } from 'src/events/typed-event-emitter.class';
export declare class AuthController {
    private readonly authService;
    private readonly eventEmitter;
    constructor(authService: AuthService, eventEmitter: TypedEventEmitter);
    login(payload: User): Promise<{
        access_token: string;
        id: number;
        email: string;
        username: string;
        password: string;
        documents: import("../documents/entities/documents.entity").Document[];
    }>;
    signUp(payload: User): Promise<{
        access_token: string;
        id: number;
        email: string;
        username: string;
        password: string;
        documents: import("../documents/entities/documents.entity").Document[];
    }>;
    logout(): Promise<{
        status: number;
        message: string;
    }>;
}
