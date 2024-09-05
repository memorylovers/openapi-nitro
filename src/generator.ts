import consola from "consola";
import { convertToRouteData } from "./converter";
import { Options } from "./models";
import { parseSpec } from "./parser";
import { writeRotueData } from "./writer";

export async function generate(option: Options) {
  consola.debug(`generate: ${JSON.stringify(option)}`);

  // parse openapi
  const openApiDoc = await parseSpec(option.inputFilePath);

  // convert to route data
  const routes = convertToRouteData(openApiDoc);

  // write routes dir
  await writeRotueData(option, routes);
}
