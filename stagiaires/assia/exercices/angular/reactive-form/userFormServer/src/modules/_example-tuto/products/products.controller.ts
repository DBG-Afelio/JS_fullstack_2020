import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AddProductDto } from './dto/AddProductDto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { ProductsEntity } from './entities/products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private prodService: ProductsService
    ) {}

    @Get()
    async getAllProducts(): Promise<ProductsEntity[]>{
        return await this.prodService.getAll();
    }

    @Get(':id')
    async getOneProduct(
        @Param('id', ParseIntPipe) id: number
    ): Promise<ProductsEntity>{
        return await this.prodService.getOne(id);
    }

    @Post()
    async addOneProduct(
        @Body() addProductDto: AddProductDto
        ): Promise<ProductsEntity>{
            return await this.prodService.addOne(addProductDto);
    }

    @Patch(':id')
    async updateOneProduct(
        @Body() updateProductDto: UpdateProductDto,
        @Param('id', ParseIntPipe) id: number
        ): Promise<ProductsEntity> {
            return await this.prodService.updateOne(id, updateProductDto);
    }

    @Patch()
    async updateOneProductBis(
        @Body() updateObject
        ) {
            const { updateCriteria, updateProductDto } = updateObject
            return await this.prodService.updateOneBis(updateCriteria, updateProductDto);
    }

    @Delete(':id')
    async removeProduct(
        @Param('id', ParseIntPipe) id: number
    ) {
        //return this.prodService.deleteOne(id); 
         return this.prodService.removeOne(id);
    }

}

