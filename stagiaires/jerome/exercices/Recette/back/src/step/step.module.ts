import { Module } from '@nestjs/common';
import { StepService } from './step.service';
import { StepController } from './step.controller';
import { Step } from './entities/step.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Step])],
  controllers: [StepController],
  providers: [StepService],
  exports: [StepService]
})
export class StepModule {}
