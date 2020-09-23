import { IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Event } from "src/event/entities/event.entity";

export class CreateTagDto {

  @IsNumber()
  "id": number;

  @IsString()
  "label": string;

  @IsString()
  "color":string;

  @Type(()=>Event)
  "events": Event[];

}
