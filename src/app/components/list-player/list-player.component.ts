import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPlayerComponent } from 'src/app/modal/edit-player/edit-player.component';
import { IBook } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  books: IBook[] = [];

  constructor(
    private playerService: PlayerService,
    private modal: NgbModal) { }

    ngOnInit() {
      this.playerService.getBooks().subscribe((res: IBook[]) => {
        this.books = res;
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
        this.playerService.deleteBook(book).then(() => 
         console.log('delete successful'));
      }
    }


// https://www.positronx.io/angular-pdf-tutorial-export-pdf-in-angular-with-jspdf/
    public openPDF():void {
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

}
