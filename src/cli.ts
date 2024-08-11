import { defineCommand, runMain } from "citty";
import pkg from "../package.json";
import { generate } from "./generator";

const main = defineCommand({
  meta: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  args: {
    input: {
      type: "positional",
      default: "./openapi.yaml",
      description: "Input OpenAPI file path",
    },
    output: {
      type: "string",
      alias: "o",
      default: "./routes",
      description: "Output dir path",
    },
  },
  run: async ({ args }) => {
    console.log(`i=${args.input}, o=${args.output}`);
    await generate({
      inputFilePath: args.input,
      outputDirPath: args.output
    });
  },
});

runMain(main);