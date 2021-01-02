import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Match } from 'src/app/models/match';
import { AuthService } from 'src/app/services/auth.service';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-form-match-day',
  templateUrl: './form-match-day.component.html',
  styleUrls: ['./form-match-day.component.scss']
})
export class FormMatchDayComponent implements OnInit {

  allMatches: Match[];
  dayMatches: Match[];
  days: string[];
  day: string;
  message: string;

  constructor(
    private auth: AuthService,
    private ranking: RankingService,
    private router: Router
  ) { }

  changeHandler(): void {
    this.message = '';
    this.getMatchesDay(this.day);
  }

  getMatchesDay(day: string): void {
    this.dayMatches = this.allMatches.filter((elem: Match) => elem.Match_sRound === day);
  }

  getDays() {
    this.days = this.allMatches.map((item: Match) => {
      return item.Match_sRound;
    }).filter((item: string, index: number, self: string[]) => {
      return self.indexOf(item) === index
    });
    let tmp: Match[] = this.allMatches.filter((item: Match) => (
      parseInt(item.Match_iState, 10) == 1
    ));
    this.day = tmp[tmp.length - 1].Match_sRound;
    this.getMatchesDay(this.day);
  }

  getMatches(): void {
    this.ranking.getMatchsDay()
      .subscribe((res: ApiResponse) => {
        this.allMatches = res.items as Match[];
        this.getDays();
      });
  }

  sendResults(): void {
    let data = [
      {
        key: 'data',
        value: JSON.stringify(this.dayMatches)
      }
    ];
    this.ranking.postResults(data)
      .subscribe((res: ApiResponse) => {
        if (res.status === 'OK') {
          this.message = 'Risultati aggiornati con successo';
          this.allMatches = res.items as Match[];
          this.ranking.postRanking()
            .subscribe((res: ApiResponse) => {
              this.message += ' ' + res.msg;
            });
        } else {
          this.message = res.msg;
        }
      });
  }

  setState(event: any, match: Match): void {
    match.Match_iState = (event.target.checked ? "1" : "0");
  }

  ngOnInit(): void {
    if (!this.auth.notExpired()) {
      this.router.navigateByUrl('login');
    } else {
      this.getMatches();
    }
  }

}
