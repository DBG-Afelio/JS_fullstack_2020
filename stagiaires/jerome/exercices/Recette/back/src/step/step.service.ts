import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { Step } from './entities/step.entity';

@Injectable()
export class StepService {

  constructor(@InjectRepository(Step)
  private stepRepository:Repository<Step>,){}

  create(createStepDto: CreateStepDto) {
    const newStep= new Step();
    newStep.description=createStepDto.description;
    return this.stepRepository.save(newStep);
  }

  findAll() {
    return this.stepRepository.find();
  }

  findOne(id: number) {
    return this.stepRepository.findOne(id);
  }

  update(id: number, updateStepDto: UpdateStepDto) {
    return `This action updates a #${id} step`;
  }

  remove(id: number) {
    return this.stepRepository.softDelete(id);
  }
}
