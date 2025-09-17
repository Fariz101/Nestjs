import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: String;

  @IsNotEmpty()
  @IsEmail()
  email: String;
  
  @IsNotEmpty()
  @IsStrongPassword()
  password: String;
}
