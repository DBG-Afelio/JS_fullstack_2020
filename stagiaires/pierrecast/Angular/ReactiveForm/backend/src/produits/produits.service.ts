import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProduitsDto } from './dto/add-produits.dto';
import { UpdateProduitsDto } from './dto/update-produits.dto';
import { ProduitsEntity } from './entities/produits.entity';

@Injectable()
export class ProduitsService {
    constructor(
        @InjectRepository(ProduitsEntity)
        private produitsRepository : Repository<ProduitsEntity>
    ) {

    }

    async getProduits(): Promise<ProduitsEntity[]> {
        return await this.produitsRepository.find();
    }

    async getProduitsById(id: number): Promise<ProduitsEntity> {
        return await this.produitsRepository.findOne();
    }

    async addProduits(produit: AddProduitsDto): Promise<ProduitsEntity> {
        return await this.produitsRepository.save(produit);
    }

    async updateProduits(id: number, produit: UpdateProduitsDto): Promise<ProduitsEntity> {
        const newProduit = await this.produitsRepository.preload({
            id,
            ...produit
        });
        if (!newProduit) {
            throw new NotFoundException(`Le Produit ${id} inexistant`);
        }
        return await this.produitsRepository.save(newProduit);
    }
 
    updateProducts2(updateCriteria, cv : UpdateProduitsDto) {
        return this.produitsRepository.update(updateCriteria, cv)
    }
   
    async removeProduits(id:number) {
        const produitToRemove = await this.produitsRepository.findOne(id);
        if (!produitToRemove) {
            throw new NotFoundException(`Le Produit ${id} inexistant`);
        }
        this.produitsRepository.remove(produitToRemove)
    }

    async deleteProduits(id:number) {
        this.produitsRepository.delete(id)
    }
}
