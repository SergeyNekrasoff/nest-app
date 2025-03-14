"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let ChatService = class ChatService {
    constructor() {
        this.client = new openai_1.default({
            apiKey: process.env.OPENAI_API_KEY,
            baseURL: process.env.OPENAI_API_URL,
        });
    }
    async generateResponse(generatedChatDto) {
        try {
            console.log(`generatedChatDto.model: ${generatedChatDto.model}`);
            const chatCompletion = await this.client.chat.completions.create({
                model: generatedChatDto.model || 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: generatedChatDto.prompt,
                    },
                ],
                max_tokens: generatedChatDto.maxTokens || 150,
            });
            return chatCompletion.choices[0]?.message.content;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to generate response from AI-Platform');
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChatService);
//# sourceMappingURL=chat.service.js.map