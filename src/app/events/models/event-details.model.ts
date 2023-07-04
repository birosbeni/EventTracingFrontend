import { EventHeader } from './event-header.model';

export interface EventDetails extends EventHeader {
  country: string;
  capacity: number;
  creationDate: Date;
}
