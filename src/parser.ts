import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";

export async function parseSpec(inputFilePath: string): Promise<OpenAPIObject> {
  // parse openapi
  const openApiDoc = (await SwaggerParser.bundle(inputFilePath)) as OpenAPIObject;
  return openApiDoc;
}