import { Subjects, Publisher, PaymentCreatedEvent } from '@umaranil1976/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
