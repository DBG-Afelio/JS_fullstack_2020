import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { Calendar } from './entities/calendar.entity';

@Controller('calendars')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createCalendarDto: CreateCalendarDto): Promise<Calendar> {
    return this.calendarService.create(createCalendarDto);
  }

  @Get()
  findAll(): Promise<Calendar[]> {
    return this.calendarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Calendar> {
    return this.calendarService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCalendarDto: CreateCalendarDto,
  ): Promise<Calendar> {
    return this.calendarService.update(+id, updateCalendarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Calendar> {
    return this.calendarService.remove(+id);
  }
}
