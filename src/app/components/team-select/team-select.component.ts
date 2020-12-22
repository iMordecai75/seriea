import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})

export class TeamSelectComponent implements OnInit {

  @Input() name: string;
  @Input() label: string;
  @Input() teams: Team[];

  modelteam: string;

  constructor() { }

  ngOnInit(): void {

  }

}
