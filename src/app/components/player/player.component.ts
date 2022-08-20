import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IBook, TYPE_LIST } from 'src/app/models/player.model';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  clickEventSubscription: Subscription;
  isShowFormConfirm:boolean = true;
  book: IBook = { name: '', posicao1: '', posicao2: '',  cancelado:false , avulso:2};
  saveData: boolean;
  name: string;
  constructor(
    private playerService: PlayerService,
    private eventEmitterService: EventEmitterService
    
    ) { 

      this.clickEventSubscription = this.eventEmitterService
      .getClickEvent().subscribe(()=> {
        this.controlForm()
        console.log("GET")
      })

    }

 

  ngOnInit() {    
    
  }   

  onSubmit(form: NgForm) {

    if(this.isShowFormConfirm){
      this.playerService.addBook(form.value, TYPE_LIST.CONFIRMED).
      then(() => form.reset());
      this.name = this.book.name;
      this.saveData = true;
    }else{
      this.playerService.addBook(form.value, TYPE_LIST.ABSENT).
      then(() => form.reset());
      this.name = this.book.name;
      this.saveData = true;
    }

    
  }

  

  public controlForm(){

    if(this.isShowFormConfirm){
      this.isShowFormConfirm = false;
      console.log("NÂO MOSTRAR")
    }else{
      this.isShowFormConfirm = true
      console.log("MOSTRAR")
    }
    
  }
 
}
