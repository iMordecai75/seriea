import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response';
import { UserRanking } from 'src/app/models/user-ranking';
import { RankingService } from 'src/app/services/ranking.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usersranking',
  templateUrl: './usersranking.component.html',
  styleUrls: ['./usersranking.component.scss']
})
export class UsersrankingComponent implements OnInit {

  usersranking: UserRanking[];

  constructor(
    private service: RankingService,
    private modalService: NgbModal
  ) { }

  getRanking(): void {
    this.service.getUsersRanking()
      .subscribe(
        (res: ApiResponse) => {
          this.usersranking = res.items as UserRanking[];
        }
      );
  }

  openScrollableContent(longContent) {
    console.log('click');
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnInit(): void {
    this.getRanking();
  }

}
