import { EmailService } from './../email/email.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly emailService;
    private readonly jwtService;
    constructor(usersService: UsersService, emailService: EmailService, jwtService: JwtService);
    login(payload: User): Promise<{
        access_token: string;
        id: number;
        email: string;
        username: string;
        password: string;
        documents: import("../documents/entities/documents.entity").Document[];
    }>;
    register(user: User): Promise<{
        access_token: string;
        id: number;
        email: string;
        username: string;
        password: string;
        documents: import("../documents/entities/documents.entity").Document[];
    }>;
}
