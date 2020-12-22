import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Team } from 'src/app/models/team';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RankingService } from 'src/app/services/ranking.service';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  teams: Team[];
  entries: Forecast[];
  modelteam1: string;
  modelteam2: string;
  modelteam3: string;
  modelteam4: string;
  modelteam5: string;
  modelteam6: string;

  constructor(
    private auth: AuthService,
    private ranking: RankingService,
    private router: Router
  ) { }

  sendRanking(form: NgForm): void {
    let datiForm = [
      { key: 'team1', value: form.value.team1 },
      { key: 'team2', value: form.value.team2 },
      { key: 'team3', value: form.value.team3 },
      { key: 'team4', value: form.value.team4 },
      { key: 'team5', value: form.value.team5 },
      { key: 'team6', value: form.value.team6 },
    ];

    this.ranking.postForecasts(datiForm)
      .subscribe((res: ApiResponse) => {
        this.entries = res.items as Forecast[];
        this.teams = null;
      });
  }

  getTeams(): void {
    this.ranking.getTeams()
      .subscribe((res: ApiResponse) => {
        this.teams = res.items as Team[];
      });
  }

  ngOnInit(): void {
    if (!this.auth.notExpired()) {
      this.router.navigateByUrl('login');
    } else {
      this.getTeams();
    }
  }

}
