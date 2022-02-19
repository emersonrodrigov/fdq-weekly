import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  @Input() id: string = "";
  player: IBook ;

  constructor(
    private playerService: PlayerService,
    public activeModal: NgbActiveModal)
     { }

 
     ngOnInit() {
      if (this.id)
        this.playerService.getBookByID(this.id).subscribe(res => {
          this.player = res
        });
    }

    onUpdate() {
      this.playerService.updateBook(this.player).then(() => {
        this.activeModal.close();
        console.log('Data add successfully');
      })
    }

    setPrice(book: IBook, price: number) {
      this.playerService.modifyBookPrice(book, price)
    }

}
