export interface Score {
  ft: number[];
}

export interface Match {
  round: string;
  date: Date;
  team1: string;
  team2: string;
  score?: Score;
  status?: string;
}
