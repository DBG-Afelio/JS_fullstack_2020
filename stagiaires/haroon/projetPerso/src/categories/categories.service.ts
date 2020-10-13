import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories';
import { CategoriesDto } from './categoriesDto';
import { CategoriesEntity } from './entity/categories.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(CategoriesEntity)
    private categoriesRepositry  :  Repository<CategoriesEntity> ){

    }
    async getAllCategories(): Promise<CategoriesEntity[]>{
        return await this.categoriesRepositry.find();
    }
    async getCategoryById(id: number ) : Promise<CategoriesEntity>  {
        return await this.categoriesRepositry.findOne(id)
    }
    async deleteCategory(id : number) {
        const category = await this.categoriesRepositry.findOne(id);
        return await this.categoriesRepositry.remove(category)
    }
    async addCategory(category : CategoriesDto) {
        return await this.categoriesRepositry.save(category) ;
    }
    async updateCategory(id : number , category : CategoriesDto ){
        const  updateCategory = await this.categoriesRepositry.preload({  // With (preload) We will get the role using it's id and then update  it  
        id ,
        ...category  
      })//verifying whether the role we are targeting exist or not
            if(!updateCategory){
                throw new NotFoundException(`Le category avece le id :${id} n'existe pas `);
    }
        return await this.categoriesRepositry.save(updateCategory);
    } 
}
