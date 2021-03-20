import { LoggerServiceSys } from "src/app/modules/eyeshare/services/sys/logger-sys.service";
import { ParserServiceSys } from "src/app/modules/eyeshare/services/sys/parser-sys.service";
import { DataProviderServiceSys } from "src/app/modules/eyeshare/services/sys/data-provider-sys.service";

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