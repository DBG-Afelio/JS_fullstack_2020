import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsEntity } from './entities/tags.entity';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        TagsEntity,
    ]),
  ],
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
