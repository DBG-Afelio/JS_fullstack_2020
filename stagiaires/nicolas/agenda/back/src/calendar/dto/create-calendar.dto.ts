import { IsOptional, IsNotEmpty } from "class-validator";
import { Event } from "src/event/entities/event.entity";

export class CreateCalendarDto {
    
    
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    label: string;

    @IsOptional()
    events:Event[];

}
