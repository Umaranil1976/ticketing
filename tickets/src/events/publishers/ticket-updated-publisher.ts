import { Publisher, Subjects, TicketUpdatedEvent } from '@umaranil1976/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
