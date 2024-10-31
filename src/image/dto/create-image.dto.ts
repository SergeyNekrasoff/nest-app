import { IsString, IsUrl } from "class-validator";

export class CreateImageDto {
  @IsString()
  @IsUrl()
  url: string;
}
