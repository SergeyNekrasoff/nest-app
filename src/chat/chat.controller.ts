import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';
import { GenerateChatDto } from './dto/generate-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async generateResponse(@Body() generatedChatDto: GenerateChatDto): Promise<string> {
    return this.chatService.generateResponse(generatedChatDto);
  }
}
