import { EmailService } from './../email/email.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: User) {
    const user = await this.usersService.validateUser(payload)
    const userData = { email: payload.email, password: payload.password }

    return { ...user, access_token: this.jwtService.sign(userData) }
  }

  async register(user: User) {
    const existingUser = await this.usersService.findOne(user.email)
    
    if (existingUser) {
      throw new BadRequestException('Email already exists')
    }

    await this.usersService.create(user)

    await this.emailService.sendWelcomeEmail({
      email: user.email,
      name: user.username
    })

    return this.login(user)
  }
}
