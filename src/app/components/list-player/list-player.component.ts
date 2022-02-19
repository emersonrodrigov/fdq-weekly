import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPlayerComponent } from 'src/app/modal/edit-player/edit-player.component';
import { IBook } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

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



}
