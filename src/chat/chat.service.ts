import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { GenerateChatDto } from './dto/generate-chat.dto';

@Injectable()
export class ChatService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_API_URL,
    })
  }

  async generateResponse(generatedChatDto: GenerateChatDto): Promise<string> {
    try {
      console.log(`generatedChatDto.model: ${generatedChatDto.model}`)
      const chatCompletion = await this.client.chat.completions.create({
        model: generatedChatDto.model || 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: generatedChatDto.prompt,
          },
        ],
        max_tokens: generatedChatDto.maxTokens || 150,
      })
      
      return chatCompletion.choices[0]?.message.content;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate response from AI-Platform');
    }
  }
}
