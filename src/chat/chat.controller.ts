import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  // generateResponse(@Body('prompt') prompt: string) {
  //   return this.chatService
  //     .generateResponse(prompt)
  //     .pipe(map((response: AxiosResponse) => response.data.choices[0].text.trim()));
  // }
  async generateResponse(@Body() body: { prompt: string }): Promise<string> {
    return this.chatService.generateResponse(body.prompt);
  }
}
