import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTagDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  name: string;
}
