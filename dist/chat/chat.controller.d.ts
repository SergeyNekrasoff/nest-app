import { ChatService } from './chat.service';
import { GenerateChatDto } from './dto/generate-chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    generateResponse(generatedChatDto: GenerateChatDto): Promise<string>;
}
