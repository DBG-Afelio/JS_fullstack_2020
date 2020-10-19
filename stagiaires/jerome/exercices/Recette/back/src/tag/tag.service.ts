import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(@InjectRepository(Tag)
  private tagRepository:Repository<Tag>,){}

  create(createTagDto: CreateTagDto) {
    const newTag=new Tag();
    newTag.label=createTagDto.label;
    return this.tagRepository.save(newTag);
  }

  findAll() {
    return this.tagRepository.find();
  }

  findOne(id: number) {
    return this.tagRepository.findOne(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
