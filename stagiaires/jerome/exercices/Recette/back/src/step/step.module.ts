import { Module } from '@nestjs/common';
import { StepService } from './step.service';
import { StepController } from './step.controller';

@Module({
  controllers: [StepController],
  providers: [StepService]
})
export class StepModule {}
