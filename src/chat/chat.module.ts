import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
// import { HttpModule } from '@nestjs/axios';

@Module({
  // imports: [HttpModule],
  controllers: [ChatController],
  providers: [ChatService],
  // exports: [ChatService],
})
export class ChatModule {}
