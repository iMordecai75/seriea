import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  ranking: Ranking[];

  constructor(private service: RankingService) { }

  getRanking(): void {
    this.service.getRanking()
      .subscribe((res: ApiResponse) => {
        this.ranking = res.items as Ranking[]
      });
  }

  ngOnInit(): void {
    this.getRanking();
  }

}
