import { ChatCompletion } from './../../node_modules/openai/resources/chat/completions.d';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  // private readonly apiKey: string;
  // private readonly apiUrl: string;

  // constructor(private readonly httpService: HttpService) {
  //   this.apiKey = process.env.OPENAI_API_KEY;
  //   this.apiUrl = process.env.OPENAI_API_URL;
  // }

  // generateResponse(prompt: string): Observable<AxiosResponse> {
  //   const data = {
  //     prompt: prompt,
  //     max_tokens: 150,
  //     n: 1,
  //     stop: null,
  //     temperature: 1,
  //   };

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.apiKey}`,
  //   }

  //   return this.httpService.post(this.apiUrl, data, { headers: headers });
  // }

  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_API_URL,
    })
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const chatCompletion = await this.client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.5,
        max_tokens: 150,
      })

      const [content] = chatCompletion.choices.map((choice) => choice.message.content);
      return content;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate response from AI-Platform');
    }
  }
}
