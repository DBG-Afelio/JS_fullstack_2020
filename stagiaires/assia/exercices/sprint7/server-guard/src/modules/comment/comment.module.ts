import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentsEntity } from './entities/comments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        CommentsEntity,
    ]),
],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
