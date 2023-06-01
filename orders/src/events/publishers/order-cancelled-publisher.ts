import { Subjects, Publisher, OrderCancelledEvent } from '@umaranil1976/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
