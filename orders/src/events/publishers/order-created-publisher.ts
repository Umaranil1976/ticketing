import { Publisher, OrderCreatedEvent, Subjects } from '@umaranil1976/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
