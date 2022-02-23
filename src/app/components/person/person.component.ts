import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { trace } from '@angular/fire/compat/performance';
import { startWith, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

const TRANSPARENT_PNG
  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  
  public readonly downloadUrl$: Observable<string>;

  constructor(storage: AngularFireStorage) {
    const icon = storage.ref('google-g.png');
    this.downloadUrl$ = icon.getDownloadURL().pipe(
      trace('storage'),
      startWith(TRANSPARENT_PNG)
    );
  }

  ngOnInit(): void {
  }
}
