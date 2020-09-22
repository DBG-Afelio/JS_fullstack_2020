import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const newEvent = await this.eventRepository.save(createEventDto);
    return newEvent;
  }

  async findAll(): Promise<Event[]> {
    const events = await this.eventRepository.find();
    return events;
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventRepository.findOne(id);
    return event;
  }

  async update(id: number, updateEventDto: CreateEventDto): Promise<Event> {
    const eventToUpdate = await this.eventRepository.preload({
      id,
      ...updateEventDto,
    });
    const event = await this.eventRepository.save(eventToUpdate);
    return event;
  }

  async remove(id: number): Promise<Event> {
    const eventToDelete = await this.eventRepository.findOne(id);
    const event = await this.eventRepository.softDelete(eventToDelete);
    if (eventToDelete) {
      return eventToDelete;
    } else {
      throw new NotFoundException('élément introuvable');
    }
  }
}
