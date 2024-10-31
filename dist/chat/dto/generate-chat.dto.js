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
exports.GenerateChatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GenerateChatDto {
    constructor() {
        this.model = 'gpt-3.5-turbo';
        this.maxTokens = 150;
        this.temperature = 1;
    }
}
exports.GenerateChatDto = GenerateChatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The prompt for text generation' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateChatDto.prototype, "prompt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The model to use for text generation', default: 'gpt-3.5-turbo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GenerateChatDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The maximum number of tokens to generate', default: 150 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GenerateChatDto.prototype, "maxTokens", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The temperature to use for control the randomness of the output', default: 0.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GenerateChatDto.prototype, "temperature", void 0);
//# sourceMappingURL=generate-chat.dto.js.map