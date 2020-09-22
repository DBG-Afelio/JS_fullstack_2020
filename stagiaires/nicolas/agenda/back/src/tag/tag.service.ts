import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = await this.tagRepository.save(createTagDto);
    return tag;
  }

  async findAll(): Promise<Tag[]> {
    const allTags = await this.tagRepository.find();
    return allTags;
  }

  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagRepository.findOne(id);

    return tag;
  }

  async update(id: number, updateTagDto: CreateTagDto): Promise<Tag> {
    const tagToUpdate = await this.tagRepository.preload({
      id,
      ...updateTagDto,
    });
    const tag = await this.tagRepository.save(tagToUpdate);
    return tag;
  }

  async remove(id: number): Promise<Tag> {
    const tagToDelete = await this.tagRepository.findOne(id);
    const tag = await this.tagRepository.softDelete(tagToDelete);

    if (tagToDelete) {
      return tagToDelete;
    } else {
      throw new NotFoundException('élément introuvable');
    }
  }
}
