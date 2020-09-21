import { Event } from '../event.model/event';

export interface TagDto {
  id: number;
  name: string;
  color: string;
  events: Event[];
}
