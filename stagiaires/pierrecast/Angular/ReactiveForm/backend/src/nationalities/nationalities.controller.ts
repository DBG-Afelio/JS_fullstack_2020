import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { NationalityDto } from './dtos/nationalityDto';
import { NationalitiesService } from './nationalities.service';

@Controller('nationalities')
export class NationalitiesController {
    constructor(private readonly nationalitiesService: NationalitiesService) { }

    @Get(':id') 
    public async findOne(@Param('id', new ParseIntPipe(
        { errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: string) {
        return this.nationalitiesService.findOne(id).then(nationality => nationality.toDto());
    }

    @Get()
    public async findAll(): Promise<NationalityDto[]> {
        return this.nationalitiesService.findAll().then(nationalities => nationalities.map(nationality => nationality.toDto()));
    }

   /* @Post()
    public async createNationality(@Body() newNationality: CreateNationalityDto) {
        console.log('newNationality', newNationality);
        this.nationalitiesService.create(newNationality);
    }

    @Patch(':id')
    public async updateNationality(@Param('id', ParseIntPipe) id: string, @Body() nationality: CreateNationalityDto) {
        return this.nationalitiesService.update(id, nationality);
    }

    @Delete(':id') 
    public async deleteToDo(@Param('id', ParseIntPipe) id: string) {
        return this.nationalitiesService.delete(id);
    }*/
}
