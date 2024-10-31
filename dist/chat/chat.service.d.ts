import { GenerateChatDto } from './dto/generate-chat.dto';
export declare class ChatService {
    private client;
    constructor();
    generateResponse(generatedChatDto: GenerateChatDto): Promise<string>;
}
