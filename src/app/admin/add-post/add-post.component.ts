import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  @ViewChild(FormGroupDirective,  {static: false}) formRef: FormGroupDirective;
  constructor(private dataStorageService: DataStorageService) { }

  postForm: FormGroup;
  formData: Article;

  /*example = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];*/

  ngOnInit() {
    this.initForm()
  }

  //TODO: refactor
  onSubmit(){
    this.postForm.value.coverPath = ['https://est.sport.es/img/lzfoto.gif'];
    console.log(this.postForm.value);
    this.formData = this.postForm.value;

    this.dataStorageService.addArtice(this.formData);
    this.dataStorageService.storeArticle(this.formData, this.formData.title)
      .then(() => {
        console.log('added!');
      });

    this.resetForm();
    
  }


  private initForm(){
    let title = '';
    let description = '';
    let previewText = '';

    this.postForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'previewText': new FormControl(previewText, Validators.required),
      //'select': new FormControl(select, Validators.required)
    })
  }

  private resetForm(){
    this.formRef.resetForm();  
    this.postForm.reset();
  }


}
