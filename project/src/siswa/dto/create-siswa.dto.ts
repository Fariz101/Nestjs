import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateSiswaDto {
  @IsNotEmpty()
  @IsString()
  nisn: string;

  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(()=>Number)
  @Min(1)
  umur: number;
}
