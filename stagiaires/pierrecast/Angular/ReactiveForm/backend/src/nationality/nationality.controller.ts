import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddNationalityDto } from './dtos/add-nationality.dto';
import { UpdateNationalityDto } from './dtos/update-nationality.dto';
import { NationalityEntity } from './entities/nationality.entity';
import { NationalityService } from './nationality.service';

@Controller('nationality')
export class NationalityController {
 
    constructor(
        private nationalityService: NationalityService
    ) {

    }

    @Get(':id')
    async getNationalityById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<NationalityEntity> {
        return await this.nationalityService.getNationalityById(id);
    }

    @Get()
    async getAllNationalities(): Promise<NationalityEntity[]> {
        return await this.nationalityService.getAllNationalities();
    }

    @Post()
    async addNationality(
       @Body() addNationalityDto: AddNationalityDto
    ): Promise<NationalityEntity> {
        return await this.nationalityService.addNationality(addNationalityDto);
    }

    @Patch(':id')
    async updateNationality(
       @Body() updateNationalityDto: UpdateNationalityDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<NationalityEntity> {
        return await this.nationalityService.updateNationality(id, updateNationalityDto);
    }

    @Delete(':id')
    async removeNationality(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.nationalityService.removeNationality(id);
    }
}
