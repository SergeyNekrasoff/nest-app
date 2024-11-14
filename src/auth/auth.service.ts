import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

// Inject UsersService and JwtService
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(email)

    if (!user) {
      throw new BadRequestException('User not found')
    }

    const isMatch: boolean = bcrypt.compareSync(password, user.password)

    if (!isMatch) {
      throw new BadRequestException('Password does not match')
    }

    return user
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, id: user.id }
    return { access_token: this.jwtService.sign(payload) }
  }

  async signUp(user: User): Promise<{ access_token: string }> {
    const existingUser = await this.usersService.findOne(user.email)
    
    if (existingUser) {
      throw new BadRequestException('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(user.password, 10)
    const newUser: User = { ...user, password: hashedPassword }

    await this.usersService.create(newUser)

    return this.login(newUser)
  }

  // async login(email: string, password: string): Promise<{ access_token: string }> {
  //   const user = await this.usersService.findOne(email)

  //   if (user?.password !== password) {
  //     throw new UnauthorizedException();
  //   }

  //   const payload = { sub: user.id, email: user.email }

  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   }
  // }

  // async signUp(payload: CreateUserDto): Promise<any> {
  //   return this.usersService.create(payload)
  // }
}
