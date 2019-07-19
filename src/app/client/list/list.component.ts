import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataStorageService ) { }

  articles = this.dataService.getData();

  ngOnInit() {
    console.log('Articles: ',this.articles);
  }

}
