import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response';
import { Match } from 'src/app/models/match';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-matches-day',
  templateUrl: './matches-day.component.html',
  styleUrls: ['./matches-day.component.scss']
})
export class MatchesDayComponent implements OnInit {

  allMatches: Match[];
  dayMatches: Match[];
  days: string[];
  day: string;

  constructor(private ranking: RankingService) { }

  changeHandler(): void {
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
    let tmp:Match[] = this.allMatches.filter((item: Match) => (
      item.Match_iState === "1"
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

  ngOnInit(): void {
    this.getMatches();
  }

}
