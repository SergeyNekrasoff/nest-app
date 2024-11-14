import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Request() req): Promise<string> {
    const accessTokenPayload = req.user
    return await this.appService.getHello(accessTokenPayload.userId);
  }
}
