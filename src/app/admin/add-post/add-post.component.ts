import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  postForm: FormGroup;

  /*example = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];*/

  ngOnInit() {
    this.initForm()
  }

  onSubmit(){
    this.postForm.value.coverPath = ['https://est.sport.es/img/lzfoto.gif'];
    console.log(this.postForm.value);
    this.dataStorageService.addArtice(this.postForm.value);
  }

  private initForm(){
    let title = '';
    let description = '';
    //let select = '';
    let previewText = '';

    this.postForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'previewText': new FormControl(previewText, Validators.required),
      //'select': new FormControl(select, Validators.required)
    })
  }

}
