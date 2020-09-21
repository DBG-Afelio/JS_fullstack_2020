import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/AddProductDto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { ProductsEntity } from './entities/products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productsRepository: Repository<ProductsEntity>
    ) {}

    async getAll(): Promise<ProductsEntity[]> {
        const prodList: ProductsEntity[] = await this.productsRepository.find();
        if(!prodList){
            throw new NotFoundException(`Oups ! Seems like there're no products here !`);
        }
        return prodList;
    }

    async getOne(id: number): Promise<ProductsEntity> {
        const prod:ProductsEntity = await this.productsRepository.findOne(id);
        if(!prod){
            throw new NotFoundException(`Oups ! Product with id ${id} does not exist !`);
        }
        return prod;
    }

    async addOne(product: AddProductDto): Promise<ProductsEntity> {
        return await this.productsRepository.save(product);
    }

    async updateOne(id: number, product: UpdateProductDto): Promise<ProductsEntity> {
        // on recupere le produit d'id id et on remplace les anciennes valeurs pr celles passees en parametres
        const newProd = await this.productsRepository.preload({
            id,
            ...product
        });

        // tester le cas ou le product d'id id n'existe pas
        if(!newProd){
            throw new NotFoundException(`Oups ! Product with id ${id} does not exist !`);
        }

        // et puis on sauvegarde la nouvelle entite, cad le nouveau Prod
        return await this.productsRepository.save(newProd);
    }

    async updateOneBis(updateCriteria, prod: UpdateProductDto) {
        return this.productsRepository.update(updateCriteria, prod);
    }

    async removeOne(id: number){
        const productToRemove: ProductsEntity = await this.productsRepository.findOne(id);
        console.log('produit a supprimer: ', productToRemove);
        // tester le cas ou le product d'id id n'existe pas
        if(!productToRemove){
            throw new NotFoundException(`Oups ! Product with id ${id} does not exist !`);
        }
        return await this.productsRepository.remove(productToRemove);
    }

    async deleteOne(id: number){
        return await this.productsRepository.delete(id);// on peut passer un objet, un tab par ex en param. cette methode est plus flexible et ouvre plus de possibilite que le remove
    }
}
