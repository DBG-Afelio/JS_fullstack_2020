import { Module } from '@nestjs/common';
import { AccessoiresController } from './accessoires.controller';
import { AccessoiresService } from './accessoires.service';

@Module({
  controllers: [AccessoiresController],
  providers: [AccessoiresService]
})
export class AccessoiresModule {}
