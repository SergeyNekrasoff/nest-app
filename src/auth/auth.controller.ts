import { Controller, Get, Post, Body, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Public } from './decorators/public.decorator';

// Handle Login and Registration routes
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

    return this.authService.signUp(user)
  }

  @Public()
  @Post('logout')
  async logout() {
    return { message: 'Logged out successfully' }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
