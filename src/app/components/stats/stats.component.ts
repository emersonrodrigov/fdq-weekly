import { Component, OnInit } from '@angular/core';
import { PlayerStat } from 'src/app/models/player.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
 
  playersStats: PlayerStat[] = [];
  goals: PlayerStat[] = [];
  assists: PlayerStat[] = [];
  displayedColumns: string[] = ['name','total'];

  constructor(  private teamService: TeamService,) { }

  ngOnInit(): void {
    this.teamService.getStatsGoals().subscribe( (res: PlayerStat[]) => {
      console.log(res)

      this.goals =  res.filter( item => {
        return  item.goals > 0;
      });
      console.log(this.goals) 
 

    })

    this.teamService.getStatsAssits().subscribe( (res: PlayerStat[]) => {
      console.log(res)
 

      this.assists =  res.filter(item => {
        return   item.assists > 0;
      }); 
      console.log(this.assists) 

    })
  }

}
