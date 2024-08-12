import { defineCommand, runMain } from "citty";
import consola from "consola";
import { description, name, version } from "../package.json";
import { generate } from "./generator";

const main = defineCommand({
  meta: { name, version, description, },
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
    consola.log(`i=${args.input}, o=${args.output}`);
    await generate({
      inputFilePath: args.input,
      outputDirPath: args.output
    });
  },
});

runMain(main);