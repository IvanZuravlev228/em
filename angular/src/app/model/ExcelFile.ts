import {Company} from "./Company";
import {Pollutant} from "./Pollutant";
import {Pollution} from "./Pollution";

export class ExcelFile {
  companies: Company[] = [];
  pollutants: Pollutant[] = [];
  pollutions: Pollution[] = [];
}
