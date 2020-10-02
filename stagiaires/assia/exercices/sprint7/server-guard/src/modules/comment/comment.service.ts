import { BadRequestException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment-dto';
import { UpdateCommentDto } from './dto/update-comment-dto';
import { CommentsEntity } from './entities/comments.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentsEntity)
    private commentsRepo: Repository<CommentsEntity>,
  ){}

  async getAll(): Promise<CommentsEntity[]> {
    const list: CommentsEntity[] = await this.commentsRepo.find().catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });

    if (!list) {
      throw new NotFoundException(`Ooups, we're having trouble retrieving info`);
    } else if(list.length === 0){
      throw new ImATeapotException(`Huum.. pretty quiete here ! Seems like there's none in the db yet`);
    } 
    return list;
  }

  async getOne(commentId: number): Promise<CommentsEntity> {
    const comment: CommentsEntity = await this.commentsRepo.findOne(commentId);
    if(!comment){
      throw new NotFoundException(`Ooups, comment ${commentId} does not exist !`);
    } else {
      return comment;
    }
  }
  
  async addOne(comment: CreateCommentDto): Promise<CommentsEntity> {
    return this.commentsRepo.save(comment).catch((error) => {
      throw new BadRequestException(error.message, error.name);
    }); ;
  }
  
  async update(id: number, commentUpdated: UpdateCommentDto): Promise<CommentsEntity> {
    const comment: CommentsEntity = await this.getOne(id);
    if(comment) {
      let update: CommentsEntity = await this.commentsRepo.preload(commentUpdated);
      return await this.commentsRepo.save(update).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

  async delete(id: number): Promise<CommentsEntity> {
    const comment: CommentsEntity = await this.getOne(id);
    if(comment) {
      return await this.commentsRepo.remove(comment).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }
  
}
