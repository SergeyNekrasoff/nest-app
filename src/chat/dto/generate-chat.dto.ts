import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GenerateChatDto {
  @ApiProperty({ description: 'The prompt for text generation' })
  @IsString()
  prompt: string;

  @ApiProperty({ description: 'The model to use for text generation', default: 'gpt-3.5-turbo' })
  @IsString()
  @IsOptional()
  model?: string = 'gpt-3.5-turbo';

  @ApiProperty({ description: 'The maximum number of tokens to generate', default: 150 })
  @IsNumber()
  @IsOptional()
  maxTokens?: number = 150;

  @ApiProperty({ description: 'The temperature to use for control the randomness of the output', default: 0.5 })
  @IsNumber()
  @IsOptional()
  temperature?: number = 1;
}
