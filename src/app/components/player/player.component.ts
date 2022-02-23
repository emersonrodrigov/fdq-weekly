import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBook } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  book: IBook = { name: '', posicao1: '', posicao2: '', churrasco: 0 };
  saveData: boolean;
  name: string;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.playerService.addBook(form.value).
      then(() => form.reset());
      this.name = this.book.name;
      this.saveData = true;
  }
}
