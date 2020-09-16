import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { StagiaireEntity } from './entities/stagiaire.entity';
import { StagiairesService } from './stagiaires.service';

@Controller('stagiaires')
export class StagiairesController {
  constructor(
    private stagService: StagiairesService
    ) {}


/******** cf. to users.controller.ts *************/ 


    // @Get()
    // async getAll(): Promise<StagiaireEntity[]> {
    //   return await this.stagService.
    // }

    // @Get(':id')
    // async getOne(): Promise<StagiaireEntity> {

    // }

    // @Post()
    // async addOne(): Promise<StagiaireEntity> {

    // }

    // @Patch(':id')
    // async updateOne(): Promise<StagiaireEntity> {

    // }

    // @Delete(':id')
    // async deleteOne(): Promise<void> {

    // }
}
