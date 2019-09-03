import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotifyService } from 'src/app/shared/notify-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit, OnDestroy {

  constructor(private notifyService: NotifyService) { }

  message: string = '';
  subscipsion: Subscription;

  ngOnInit() {
    this.subscipsion = this.notifyService.notify$.subscribe(
      (item) => {
        this.message = item;
        console.log('GETTING', item)
      }
    )
  }

  ngOnDestroy() {
    this.subscipsion.unsubscribe()
  }

}
