import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { Calendar } from './entities/calendar.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
  ) {}

  async create(createCalendarDto: CreateCalendarDto): Promise<Calendar> {
    const newCalendar = await this.calendarRepository.save(createCalendarDto);
    return newCalendar;
  }

  async findAll(): Promise<Calendar[]> {
    const allCalendar = await this.calendarRepository.find();
    return allCalendar;
  }

  async findOne(id: number): Promise<Calendar> {
    const calendar = await this.calendarRepository.findOne(id);
    return calendar;
  }

  async update(
    id: number,
    updateCalendarDto: CreateCalendarDto,
  ): Promise<Calendar> {
    const calendarToUpdate = await this.calendarRepository.preload({
      id,
      ...updateCalendarDto,
    });
    const updatedCalendar = await this.calendarRepository.save(
      calendarToUpdate,
    );
    return updatedCalendar;
  }

  async remove(id: number): Promise<Calendar> {
    const calendarToDelete = await this.calendarRepository.findOne(id);
    const calendar = await this.calendarRepository.softDelete(calendarToDelete);
    if (calendarToDelete) {
      return calendarToDelete;
    } else {
      throw new NotFoundException('élément introuvable');
    }
  }
}
