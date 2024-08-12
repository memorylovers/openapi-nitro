import consola from "consola";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "pathe";
import { Options, RouteData } from "./models";

export async function writeRotueData({ outputDirPath }: Options, routes: RouteData[]) {
  await Promise.all(
    routes.map(async route => {
      const fileName = `index.${route.method}.ts`;
      const dirPath = join(outputDirPath, route.path);

      const dirExists = existsSync(dirPath);
      if (!dirExists) {
        mkdirSync(dirPath, { recursive: true });
        consola.debug(`mkdir: ${join(route.path)}`);
      } else {
        // consola.debug(`exist dir: ${join(dirPath)}`);
      }

      const filePath = join(dirPath, fileName);
      const fileExists = existsSync(filePath);
      const fileContent = toRouteContent(route);
      if (fileExists) {
        consola.warn(`exist: ${join(route.path, fileName)}`);
        writeFileSync(filePath, fileContent, { encoding: "utf8" });
      } else {
        writeFileSync(filePath, fileContent, { encoding: "utf8" });
        consola.debug(`write: ${join(route.path, fileName)}`);
      }

    })
  );
}


export function toRouteContent(route: RouteData) {
  return `
export default defineEventHandler(async event => {

});`.trim();
}