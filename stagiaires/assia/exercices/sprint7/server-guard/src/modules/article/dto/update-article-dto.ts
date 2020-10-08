import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusEnum } from 'src/enum/status.enum';
import { TagsEntity } from 'src/modules/tag/entities/tags.entity';

export class UpdateArticleDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsOptional()
  @Transform(
      tagIds => tagIds ? tagIds.map((id: number) => ({ id })) : null
    )
  tags: Partial<TagsEntity>[];
}
