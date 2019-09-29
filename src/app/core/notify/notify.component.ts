import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotifyService } from "src/app/shared/notify-service";
import { Subscription } from "rxjs";
import { Notify } from "src/app/shared/notify.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-notify",
  templateUrl: "./notify.component.html",
  styleUrls: ["./notify.component.scss"],
  animations: [
    trigger("notyState", [
      state(
        "false",
        style({
          bottom: "-300px",
          opacity: "0"
        })
      ),
      state(
        "true",
        style({
          bottom: "0",
          opacity: "1"
        })
      ),
      transition("true<=>false", animate("400ms"))
    ])
  ]
})
export class NotifyComponent implements OnInit, OnDestroy {
  constructor(private notifyService: NotifyService) {}

  notification: Notify;
  subsciption: Subscription;
  animationState: boolean = false;

  ngOnInit() {
    this.subsciption = this.notifyService.notify$.subscribe(item => {
      this.notification = item;
      this.onChangeState(this.notification.fired);
      console.log("GETTING", item);
    });
  }

  onChangeState(state: boolean) {
    this.animationState = state;
    console.log("ANIMATION STATE", state);
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
}
