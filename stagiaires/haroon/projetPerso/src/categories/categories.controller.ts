import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './categoriesDto';
import { CategoriesEntity } from './entity/categories.entity';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoryService : CategoriesService){}
    @Get()
    getAllCategories(): Promise<CategoriesEntity[]> {
        return this.categoryService.getAllCategories();
    }
    @Get(':id')
    async getCategoryById(
        @Param('id', ParseIntPipe)id:number) :Promise<CategoriesEntity>{
        return await this.categoryService.getCategoryById(id)   
  }
    @Post()
    async addCategory(@Body() categoryDto: CategoriesDto): Promise<CategoriesEntity> {
        console.log(categoryDto);
        return await this.categoryService.addCategory(categoryDto);


    }
    @Delete(':id')
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.deleteCategory(id);
    }
    @Patch(':id')
    async updateCategoty(
    @Body() updateCategoty:CategoriesDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.categoryService.updateCategory(id , updateCategoty );
    }

}
