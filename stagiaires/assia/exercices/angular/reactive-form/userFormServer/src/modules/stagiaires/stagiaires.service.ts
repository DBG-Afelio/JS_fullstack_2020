import { BadRequestException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddStagiaireDto } from './dto/addStagiaireDto';
import { UpdateStagiaireDto } from './dto/updateStagiaireDto';
import { StagiaireEntity } from './entities/stagiaire.entity';

@Injectable()
export class StagiairesService {
  constructor(
    @InjectRepository(StagiaireEntity)
    private stagiairesRepository: Repository<StagiaireEntity>
  ) {}

  async getAll(): Promise<StagiaireEntity[]> {
    const list: StagiaireEntity[] = await this.stagiairesRepository.find().catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });

    if(list.length === 0){
        throw new ImATeapotException(`Humm.. Pretty quiete here ! Seems like no user could be found. Make sure you add some new users`)
    } else if(!list) {
      throw new NotFoundException(`Oups ! Seems like we're having trouble retrieving users`);
    }
    return list;
  }

  async getOne(stagiaireId: number): Promise<StagiaireEntity> {
    const user: StagiaireEntity = await this.stagiairesRepository.findOne(stagiaireId);
    if(!user){
      throw new NotFoundException(`Oups ! User with id ${stagiaireId} could not be found !`);
    } else {
      return user;
    }
  }

  async addOne(stagiaire: AddStagiaireDto): Promise<StagiaireEntity> {
    return await this.stagiairesRepository.save({
      ...stagiaire,
      nation: { id: stagiaire.nationId }
    })
    .catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });
  }

  async updateOne(id: number, stagiaire: UpdateStagiaireDto): Promise<StagiaireEntity> {
    const user = await this.getOne(stagiaire.id);
    if (user){
      const updated = await this.stagiairesRepository.preload({
        id,
        ...stagiaire,
        nation: { id: stagiaire.nationId }
      });
  
      return await this.stagiairesRepository.save(updated)
      .catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }
  
}
