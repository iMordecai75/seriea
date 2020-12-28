import { Forecast } from "./forecast";
import { Match } from "./match";
import { Team } from "./team";

export interface ApiResponse {
  status: string;
  msg: string;
  item: Team|Forecast|Match;
  items: Team[]|Forecast[]|Match[];
}
