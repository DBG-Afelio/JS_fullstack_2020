import { Optional } from "@nestjs/common";
import { IsEnum } from "class-validator";
import { JobsEnum } from "src/enums/jobs.enum";

export class UpdateRoleDto {

  @IsEnum(JobsEnum)
  @Optional()
  public name: JobsEnum;

}
