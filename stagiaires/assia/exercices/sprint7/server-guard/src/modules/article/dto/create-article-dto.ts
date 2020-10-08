import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusEnum } from 'src/enum/status.enum';
import { TagsEntity } from 'src/modules/tag/entities/tags.entity';
import { UsersEntity } from 'src/modules/user/entities/users.entity';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  // @IsOptional()
  // @IsDateString()
  // publiDate: Date;

  @IsNotEmpty()
  @Transform(
      authorId => ({ id: authorId })
    )
  author: Partial<UsersEntity>;

  @IsNotEmpty()
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
