import { Forecast } from "./forecast";
import { Match } from "./match";
import { Ranking } from "./ranking";
import { Team } from "./team";
import { UserRanking } from "./user-ranking";

export interface ApiResponse {
  status: string;
  msg: string;
  item: Team|Forecast|Match|Ranking|UserRanking;
  items: Team[]|Forecast[]|Match[]|Ranking[]|UserRanking[];
}
