import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddNationalityDto } from './dtos/add-nationality.dto';
import { UpdateNationalityDto } from './dtos/update-nationality.dto';
import { NationalityEntity } from './entities/nationality.entity';

@Injectable()
export class NationalityService {
    constructor(
        @InjectRepository(NationalityEntity)
        private nationalityRepository : Repository<NationalityEntity>
    ) {

    }

    async getAllNationalities(): Promise<NationalityEntity[]> {
        return await this.nationalityRepository.find({
            relations: ["users"]
        });
    }

    async getNationalityById(id: number): Promise<NationalityEntity> {
        return await this.nationalityRepository.findOne(id);
    }

    async addNationality(nationality: AddNationalityDto): Promise<NationalityEntity> {
        return await this.nationalityRepository.save(nationality);
    }

    async updateNationality(id: number, nationality: UpdateNationalityDto): Promise<NationalityEntity> {
        const newNationality = await this.nationalityRepository.preload({
            id,
            ...nationality
        });
        if (!newNationality) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        return await this.nationalityRepository.save(newNationality);

    }

    async removeNationality(id:number) {
        const nationalityToRemove = await this.nationalityRepository.findOne(id);
        if (!nationalityToRemove) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        this.nationalityRepository.remove(nationalityToRemove)
    }
    
}
