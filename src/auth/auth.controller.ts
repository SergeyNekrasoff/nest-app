import { Controller, Get, Post, Body, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Public } from './decorators/public.decorator';
import { generateOTP } from 'src/utils';
import { TypedEventEmitter } from 'src/events/typed-event-emitter.class';
// import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly eventEmitter: TypedEventEmitter,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @Post('login')
  async login(@Body() payload: User) {
    return this.authService.login(payload)
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  @ApiOperation({ summary: 'User register' })
  async signUp(@Body() payload: User) {
    const user = {
      id: payload.id,
      username: payload.username,
      email: payload.email,
      password: payload.password
    }

    this.eventEmitter.emit('user.welcome', {
      name: payload.username,
      email: payload.email,
    })

    this.eventEmitter.emit('user.verify-email', {
      name: payload.username,
      email: payload.email,
      otp: generateOTP(),
    })

    return this.authService.register(user)
  }

  @Post('logout')
  async logout() {
    return { status: 200, message: 'Logged out successfully' }
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return this.authService.validateUser(req.user)
  // }
}
