import { BadRequestException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag-dto';
import { UpdateTagDto } from './dto/update-tag-dto';
import { TagsEntity } from './entities/tags.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagsEntity)
    private tagsRepo: Repository<TagsEntity>,
  ){}

  async getAll(): Promise<TagsEntity[]> {
    const list: TagsEntity[] = await this.tagsRepo.find().catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });

    if (!list) {
      throw new NotFoundException(`Ooups, we're having trouble retrieving info`);
    } else if(list.length === 0){
      throw new ImATeapotException(`Huum.. pretty quiete here ! Seems like there's none in the db yet`);
    } 
    return list;
  }

  async getOne(tagId: number): Promise<TagsEntity> {
    const tag: TagsEntity = await this.tagsRepo.findOne(tagId);
    if(!tag){
      throw new NotFoundException(`Ooups, tag ${tagId} does not exist !`);
    } else {
      return tag;
    }
  }
  
  async addOne(tag: CreateTagDto): Promise<TagsEntity> {
    return this.tagsRepo.save(tag).catch((error) => {
      throw new BadRequestException(error.message, error.name);
    }); ;
  }
  
  async update(id: number, tagUpdated: UpdateTagDto): Promise<TagsEntity> {
    const tag: TagsEntity = await this.getOne(id);
    if(tag) {
      let update: TagsEntity = await this.tagsRepo.preload(tagUpdated);
      return await this.tagsRepo.save(update).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

  async delete(id: number): Promise<TagsEntity> {
    const tag: TagsEntity = await this.getOne(id);
    if(tag) {
      return await this.tagsRepo.remove(tag).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }
}
