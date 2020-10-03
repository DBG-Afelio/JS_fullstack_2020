import { IsEnum, IsIn, IsNumber, IsOptional } from "class-validator";
import { StatusEnum } from "src/enum/status.enum";


export class GetCommentFiltersDto {
    
  @IsOptional()
  @IsNumber()
  reviewerId: number;

  @IsOptional()
  @IsEnum(StatusEnum)
  @IsIn(Object.values(StatusEnum))
  status: StatusEnum;


  @IsOptional()
  @IsNumber()
  articleId: number;

}