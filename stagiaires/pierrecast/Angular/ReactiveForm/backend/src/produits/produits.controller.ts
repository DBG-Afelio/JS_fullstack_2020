import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddProduitsDto } from './dto/add-produits.dto';
import { UpdateProduitsDto } from './dto/update-produits.dto';
import { ProduitsEntity } from './entities/produits.entity';
import { ProduitsService } from './produits.service';

@Controller('produits')
export class ProduitsController {
    constructor (
        private produitsService: ProduitsService
    ) {

    }

    @Get(':id')
    async getProduitsById(
        @Param('id', ParseIntPipe) id :number
    ): Promise<ProduitsEntity> {
        return await this.produitsService.getProduitsById(id);
    }

    @Get()
    async getAllProduit(): Promise<ProduitsEntity[]> {
        return await this.produitsService.getProduits();
    }

    @Post()
    async addProduits(
       @Body() addProduitsDto: AddProduitsDto
    ): Promise<ProduitsEntity> {
        return await this.produitsService.addProduits(addProduitsDto);
    }

    @Patch(':id')
    async updateProduits(
       @Body() updateProduitsDto: UpdateProduitsDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<ProduitsEntity> {
        return await this.produitsService.updateProduits(id, updateProduitsDto);
    }

    /*@Patch()
    async updateProduits2(
       @Body() updateObject
    ): Promise<ProduitsEntity> {
        const { updateCriteria, updateProduits } = updateObject;
        return await this.produitsService.updateProduits(updateCriteria, updateProduits);
    }*/

    @Delete(':id')
    async removeProduits(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.produitsService.removeProduits(id);
        //return this.produitsService.deleteProduits(id);
    }

}
