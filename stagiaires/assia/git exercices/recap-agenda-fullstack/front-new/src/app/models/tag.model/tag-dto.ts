import { MyEvent } from '../event.model/MyEvent';

export interface TagDto {
  id: number;
  name: string;
  color: string;
  events: Event[];
}
