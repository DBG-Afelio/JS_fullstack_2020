import { Module } from '@nestjs/common';
import { NationalitiesService } from './nationalities.service';

@Module({
  providers: [NationalitiesService]
})
export class NationalitiesModule {}
