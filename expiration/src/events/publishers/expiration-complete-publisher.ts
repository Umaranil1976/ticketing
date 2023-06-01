import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@umaranil1976/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
