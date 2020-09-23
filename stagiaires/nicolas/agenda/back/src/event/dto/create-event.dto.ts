import { IsNotEmpty, IsOptional, IsEmail, IsUrl, IsDateString, IsString, ValidateNested, IsISO8601 } from "class-validator";
import { AddInfos } from "../entities/addInfos.entity";
import { Tag } from "src/tag/entities/tag.entity";
import { PointDto } from "./point.dto";
import { Type } from "class-transformer"

export class CreateEventDto {

    @IsNotEmpty()
    @IsString()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    name:string;
  
    @IsNotEmpty()
    @IsISO8601()
    startDate:Date;
  
    @IsNotEmpty()
    @IsISO8601()
    endDate:Date;
  
    @IsOptional()
    @IsUrl()
    url:string;
  
    @IsOptional()
    @IsString()
    description:string;
  
    @IsOptional()
    @ValidateNested()
    @Type(()=>PointDto)
    coordinates:PointDto;
  
    @IsOptional()
    @IsUrl()
    image:string;
  
    @IsOptional()
    @IsString()
    country:string;
  
    @IsOptional()
    @IsString()
    department:string;
  
    @IsOptional()
    @IsString()
    city:string;
  
    @IsOptional()
    @IsString()
    address:string;
  
    @IsOptional()
    @IsString()
    postalCode:string;
  
    @IsOptional()
    @ValidateNested()
    contacts:AddInfos[];

    @IsOptional()
    @IsString()
    phone:string;
  
    @IsOptional()
    @IsEmail()
    email: string;
  
    @IsOptional()
    tags: Tag[];

    calendarId:number

}
