import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

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


  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload()
  }

  startUpload(){
    const path = `articles/${Date.now}_${this.file.name}`;
    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges()
      .pipe(
        tap(console.log),
        finalize( async() => {
          this.downloadURL = await ref.getDownloadURL().toPromise();
          console.log(this.downloadURL);
          /*
          TODO: save url to form values
          this.db.collection('files').add( { downloadURL: this.downloadURL , path });*/
        })
      )

  }

  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
  
}
