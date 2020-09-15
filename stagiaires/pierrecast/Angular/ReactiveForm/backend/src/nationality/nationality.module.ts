import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalityEntity } from './entities/nationality.entity';
import { NationalityController } from './nationality.controller';
import { NationalityService } from './nationality.service';

@Module({
  imports: [TypeOrmModule.forFeature([NationalityEntity])],
  controllers: [NationalityController],
  providers: [NationalityService]
})
export class NationalityModule {}
