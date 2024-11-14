import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: 'Username for user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  username: string;
  
  @ApiProperty({ description: 'Email for user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password for user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ description: 'Confirm password for user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmPassword: string;
}