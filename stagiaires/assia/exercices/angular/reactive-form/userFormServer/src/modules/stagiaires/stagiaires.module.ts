import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalityEntity } from './entities/nationality.entity';
import { StagiaireEntity } from './entities/stagiaire.entity';
import { StagiairesController } from './stagiaires.controller';
import { StagiairesService } from './stagiaires.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    StagiaireEntity, 
    NationalityEntity
  ])],
  controllers: [StagiairesController],
  providers: [StagiairesService]
})
export class StagiairesModule {}
