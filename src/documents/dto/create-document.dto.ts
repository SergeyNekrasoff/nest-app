import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDocumentDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content?: string;
}

export class CreateDocumentPatchDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  updateDocumentDto?: CreateDocumentDto
}