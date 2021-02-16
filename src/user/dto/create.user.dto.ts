import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  passwordConfirm: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  @Max(100)
  @IsOptional()
  level: number;

  @IsOptional()
  @IsString()
  role: string;
}
