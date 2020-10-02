import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { StatusEnum } from "src/enum/status.enum";
import { ArticleEntity } from "src/modules/article/entities/article.entity";
import { UsersEntity } from "src/modules/user/entities/users.entity";

export class CreateCommentDto {
   
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsEnum(StatusEnum)
    status: StatusEnum;

    @IsNotEmpty()
    article: ArticleEntity;

    @Transform(
        reviewerIds => reviewerIds.map((id: number) => ({ id }))
    )
    reviewer: UsersEntity [];
}
