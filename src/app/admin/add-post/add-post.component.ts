import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  postForm: FormGroup;

  example = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];

  ngOnInit() {
    this.initForm()
  }

  onSubmit(){
    console.log(this.postForm.value)
  }

  private initForm(){
    let title = '';
    let text = '';
    let select = '';

    this.postForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'text': new FormControl(text, Validators.required),
      'select': new FormControl(select, Validators.required)
    })
  }

}
