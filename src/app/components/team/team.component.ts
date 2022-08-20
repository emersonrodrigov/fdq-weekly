import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  players: Player[] = [];
  
  constructor(  private teamService: TeamService,) { }

  ngOnInit(): void {
    this.teamService.getPlayers().subscribe((res: Player[]) => {
      console.log(res)
      this.players = res;
    })
  }

}
