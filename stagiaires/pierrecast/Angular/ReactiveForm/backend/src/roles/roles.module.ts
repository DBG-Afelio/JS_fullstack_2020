import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';

@Module({
  providers: [RolesService]
})
export class RolesModule {}
