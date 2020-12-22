import { Forecast } from "./forecast";
import { Team } from "./team";

export interface ApiResponse {
  status: string;
  msg: string;
  item: Team|Forecast;
  items: Team[]|Forecast[];
}
