import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notify } from './notify.model';


@Injectable()
export class NotifyService {

  private notifyEvent = new BehaviorSubject<Notify>({
    type: '',
    message: '',
    fired: false
  });
  public notify$ = this.notifyEvent.asObservable();

  setEvent(event: Notify) {
    this.notifyEvent.next(event);
    this.resetNotify();
  }

  resetNotify(){
    setTimeout(() => {this.notifyEvent.next({
      type: '',
      message: '',
      fired: false
    })}, 4000);
  }

}