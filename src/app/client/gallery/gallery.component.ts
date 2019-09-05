import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: String[];

  constructor() { }

  ngOnInit() {
    console.log('IMGS',this.images)
  }

  layout: boolean = false;

}
