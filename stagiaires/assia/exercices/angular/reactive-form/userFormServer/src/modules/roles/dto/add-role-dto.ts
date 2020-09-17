import { allow } from "@hapi/joi";
import { Transform, Type } from "class-transformer";
import { Allow, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { JobsEnum } from "src/enums/jobs.enum";
import { StagiaireEntity } from "src/modules/stagiaires/entities/stagiaire.entity";

export class AddRoleDto {

  @IsEnum(JobsEnum)
  @IsNotEmpty()
  @Allow()
  // @Transform(
  //   name => JobsEnum[name]
  // )
  name: JobsEnum;

}
