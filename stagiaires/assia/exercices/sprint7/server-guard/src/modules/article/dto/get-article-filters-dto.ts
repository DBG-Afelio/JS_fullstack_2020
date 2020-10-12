
import { IsEnum, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { StatusEnum } from "src/enum/status.enum";


export class GetArticleFiltersDto {
    
  @IsOptional()
  @IsNumber()
  authorId: number;

  @IsOptional()
  @IsEnum(StatusEnum)
  @IsIn(Object.values(StatusEnum))
  status: StatusEnum;


  @IsOptional()
  @IsNumber()
  tagId: number;

}