import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureController } from './picture.controller';
import { Picture } from './entities/picture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Picture])],
  controllers: [PictureController],
  providers: [PictureService],
  exports:[PictureService]
})
export class PictureModule {}
