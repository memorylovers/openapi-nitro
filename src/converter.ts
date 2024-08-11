import { OpenAPIObject, PathItemObject } from "openapi3-ts/oas31";
import { RouteData } from "./models";

const methods: (keyof PathItemObject)[] = ["get", "post", "put", "patch", "delete"];
export function convertToRouteData(openApiDoc: OpenAPIObject): RouteData[] {
  if (openApiDoc.paths == null) return [];
  const routes = Object.entries(openApiDoc.paths)
    .reduce<RouteData[]>((acc, [_path, item]) => {
      const path = convertPath(_path);

      methods.forEach(method => {
        if (item[method] == null) return;
        acc.push({
          method: method as any,
          path: path,
          item: item,
        });
      });
      return acc;
    }, []);
  return routes;
}

function convertPath(origPath: string): string {
  return origPath.replaceAll("{", "[").replaceAll("}", "]");
}