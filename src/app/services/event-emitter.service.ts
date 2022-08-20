import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
 
  private subject = new Subject<any>();

  sendClickEvent(){
    this.subject.next('');
  }


  getClickEvent(){
    return this.subject.asObservable()
  }




}
