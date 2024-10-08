import { PathItemObject } from "openapi3-ts/oas31";

export interface Options {
  inputFilePath: string;
  outputDirPath: string;
  overwrite: boolean;
}

export interface RouteData {
  path: string;
  method: "get" | "post" | "patch" | "put" | "delete",
  item: PathItemObject,
}
