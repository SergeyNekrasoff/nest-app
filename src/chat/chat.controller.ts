import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';
import { GenerateChatDto } from './dto/generate-chat.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async generateResponse(@Body() generatedChatDto: GenerateChatDto): Promise<string> {
    return this.chatService.generateResponse(generatedChatDto);
  }
}
