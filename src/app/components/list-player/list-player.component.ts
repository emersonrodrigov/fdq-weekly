import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPlayerComponent } from 'src/app/modal/edit-player/edit-player.component';
import { IBook, TYPE_LIST } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PlayerComponent } from '../player/player.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
  import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
 


  lstConfirmedAll: IBook[] = [];
  lstConfirmedSoccer: IBook[] = [];
  lstConfirmedBarbecue: IBook[] = [];

  lstConfirmedCanced: IBook[] = [];
  lstAbsent: IBook[] = [];
  displayedColumns: string[] = ['name'];
  // dataSource = [];
  constructor(
    private playerService: PlayerService,
    private modal: NgbModal,
    private eventEmitterService: EventEmitterService) {

         

     }

  ngOnInit() {
    this.playerService.getBooks(TYPE_LIST.CONFIRMED).subscribe(  async (res: IBook[])  => {
      this.lstConfirmedAll =   res;

       this.lstConfirmedSoccer =     res.filter( item => item.churrasco != 2 && !item.cancelado )
       .sort((a:IBook,b:IBook)=>
        (a.posicao1.localeCompare(b.posicao1) 
       
       ))
       
 
      this.lstConfirmedBarbecue = res.filter( item => item.churrasco == 2 &&  !item.cancelado )
      this.lstConfirmedCanced = res.filter(item =>  item.cancelado )
      console.log(this.lstConfirmedAll)
      console.log(this.lstConfirmedSoccer)
      console.log(this.lstConfirmedBarbecue)
    })

    this.playerService.getBooks(TYPE_LIST.ABSENT).subscribe((res: IBook[]) => {
      this.lstAbsent = res;
    })
  }

  editModal(book: IBook) {
    const modalRef = this.modal.open(EditPlayerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });



    modalRef.componentInstance.id = book.id;
  }

  deleteBook(book: IBook) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.playerService.deleteBook(book,TYPE_LIST.CONFIRMED).then(() =>
        console.log('delete successful'));
    }
  }

  cancelar(book: IBook) {
    if (confirm('Deseja realmente cancelar seu nome na lista ?') == true) {
      this.playerService.cancelar(book,TYPE_LIST.CONFIRMED).then(() =>
        console.log('Seu nome foi cancelado com sucesso'));
    }
  }

  RefazerCancelamento(book: IBook) {
    if (confirm('Deseja realmente voltar para a lista ?') == true) {
      this.playerService.refazerCancelamento(book,TYPE_LIST.CONFIRMED).then(() =>
        console.log('Seu nome foi incluido com sucesso'));
    }
  }

  cancelarAbsent(book: IBook) {
    if (confirm('Deseja realmente cancelar seu nome na lista ?') == true) {
      this.playerService.cancelar(book,TYPE_LIST.ABSENT).then(() =>
        console.log('Seu nome foi cancelado com sucesso'));
    }
  }

  RefazerCancelamentoAbsent(book: IBook) {
    if (confirm('Deseja realmente voltar para a lista ?') == true) {
      this.playerService.refazerCancelamento(book,TYPE_LIST.ABSENT).then(() =>
        console.log('Seu nome foi incluido com sucesso'));
    }
  }


  // https://www.positronx.io/angular-pdf-tutorial-export-pdf-in-angular-with-jspdf/
  public openPDF(): void {
    let DATA = document.getElementById('htmlData') as HTMLElement;

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('angular-demo.pdf');
    });
  }


  flgDisabled:boolean;

  public disableForm(flg:boolean){
  //     console.log("teste");
  //  let playerComponent = 
  //   new PlayerComponent(this.playerService)
  //  playerComponent.disableForm(flg);

  }


  onChange(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    console.log(tab);
    if(tab===" Tab 1")
     {
       console.log("function want to implement");
      }
  }

 

  clickMe(index: number){
      this.eventEmitterService.sendClickEvent()
      console.log("SEND")
  }

}
