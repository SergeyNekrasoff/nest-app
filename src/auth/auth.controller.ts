import { Controller, Get, Post, Body, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Public } from './decorators/public.decorator';
import { generateOTP } from 'src/utils';
import { TypedEventEmitter } from 'src/events/typed-event-emitter.class';

// Handle Login and Registration routes
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly eventEmitter: TypedEventEmitter,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User Sign-in' })
  @Post('login')
  async login(@Body() payload: User) {
    return this.authService.signIn(payload)
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiOperation({ summary: 'User Sign-up' })
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

    return this.authService.signUp(user)
  }

  @Post('logout')
  async logout() {
    return { message: 'Logged out successfully' }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
