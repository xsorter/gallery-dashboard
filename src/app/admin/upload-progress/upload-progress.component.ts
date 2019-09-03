import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { NotifyService } from 'src/app/shared/notify-service';

@Component({
  selector: 'app-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;


  constructor(private storage: AngularFireStorage, private db: AngularFirestore,
              private uploadService: ImageUploadService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.fileTypeCheck();
    this.startUpload()
  } 

  startUpload() {
    const path = `articles/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges()
      .pipe(
        tap(console.log),
        finalize(async () => {
          this.downloadURL = await ref.getDownloadURL().toPromise();
          console.log(this.downloadURL);
          this.uploadService.addUrl(this.downloadURL);
        })
      )

  }

  fileTypeCheck(){
    this.notifyService.setEvent({
      type: 'error',
      message: 'this is img event',
      fired: true
    });
    const fileType = this.file.type.split('/')[0];
    if(fileType == 'image'){
      //TODO: fire upload from here
      console.log('this is image')
    }else{
      console.log('wrong file')
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
