import { Module } from '@nestjs/common';
import { StagiairesController } from './stagiaires.controller';
import { StagiairesService } from './stagiaires.service';

@Module({
  controllers: [StagiairesController],
  providers: [StagiairesService]
})
export class StagiairesModule {}
