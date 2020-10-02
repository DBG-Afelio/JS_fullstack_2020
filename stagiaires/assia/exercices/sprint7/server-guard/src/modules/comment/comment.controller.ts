import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/passport/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment-dto';
import { UpdateCommentDto } from './dto/update-comment-dto';
import { CommentsEntity } from './entities/comments.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentsService: CommentService,
  ) {}

//   @Roles()
    @Get()
    getCommentList(
        @Req() req
    ): Promise<CommentsEntity[]> {
        return this.commentsService.getAll();
    }

//   @Roles()
    @Get(':id')
    getComment(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
    ): Promise<CommentsEntity> {
        return this.commentsService.getOne(id);
    }

    @Post()
    createComment(
      @Body() createComment: CreateCommentDto
    ): Promise<CommentsEntity> {
      return this.commentsService.addOne(createComment);
    }

//   @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
    @Patch(':id')
    updateComment(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number,
        @Body() upComment: UpdateCommentDto
    ): Promise<CommentsEntity> {
        return this.commentsService.update(id, upComment);
    }

  //  @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
    @Delete(':id')
    removeComment(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
    ): Promise<any> {
        return this.commentsService.delete(id);
        }
}
