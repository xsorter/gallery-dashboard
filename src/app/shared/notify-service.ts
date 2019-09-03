import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class NotifyService {

  private notifyEvent = new BehaviorSubject<string>('');
  public notify$ = this.notifyEvent.asObservable();

  setEvent(event) {
    this.notifyEvent.next(event);
  }

}