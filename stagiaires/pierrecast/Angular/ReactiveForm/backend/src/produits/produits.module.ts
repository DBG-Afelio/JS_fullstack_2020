import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitsEntity } from './entities/produits.entity';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitsEntity])],
  controllers: [ProduitsController],
  providers: [ProduitsService]
})
export class ProduitsModule {}
