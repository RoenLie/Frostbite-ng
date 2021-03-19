import { LoggerServiceSys } from "src/app/modules/eyeshare/services/logger/logger-sys.service";
import { ParserServiceSys } from "src/app/modules/eyeshare/services/parser/parser-sys.service";
import { DataProviderServiceSys } from "../../services/data-provider/data-provider-sys.service";

export const Logger = LoggerServiceSys;
export const Parser = ParserServiceSys;
export const DataProvider = DataProviderServiceSys;



export const styles = {
  EsLines: `
  * {
    // color: pink;
  }

  button {
    // background-color: darkgreen;
  }
`
}