
export interface Options {
  inputFilePath: string;
  outputDirPath: string;
}

export interface RouteData {
  path: string;
  method: "get" | "post" | "patch" | "put" | "delete",
}
