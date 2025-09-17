import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsEmail,IsString,IsStrongPassword, } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    name: String;
    
    @IsOptional()
    @IsEmail()
    email: String;
      
    @IsOptional()
    @IsStrongPassword()
    password: String;
}
