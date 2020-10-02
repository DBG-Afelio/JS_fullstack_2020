import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { StatusEnum } from "src/enum/status.enum";
import { TagsEntity } from "src/modules/tag/entities/tags.entity";
import { UsersEntity } from "src/modules/user/entities/users.entity";

export class CreateArticleDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    author: UsersEntity;

    @IsNotEmpty()
    @IsEnum(StatusEnum)
    status: StatusEnum;

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @Transform(
        tagIds => tagIds.map((id: number) => ({ id }))
    )
    tags?: Partial<TagsEntity>[];
}
