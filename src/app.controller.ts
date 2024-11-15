import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  async getHello(@Request() req): Promise<string> {
    const accessTokenPayload = req.user
    return await this.appService.getHello(accessTokenPayload);
  }
}
