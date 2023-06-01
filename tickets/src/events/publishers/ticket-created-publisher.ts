import { Publisher, Subjects, TicketCreatedEvent } from '@umaranil1976/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
