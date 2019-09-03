import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class NotifyService {

  private notifyEvent = new BehaviorSubject<any>({});
  public notify$ = this.notifyEvent.asObservable();

  setEvent(event) {
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