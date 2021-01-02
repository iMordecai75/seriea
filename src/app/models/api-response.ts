import { Forecast } from "./forecast";
import { Match } from "./match";
import { Ranking } from "./ranking";
import { Team } from "./team";

export interface ApiResponse {
  status: string;
  msg: string;
  item: Team|Forecast|Match|Ranking;
  items: Team[]|Forecast[]|Match[]|Ranking[];
}
