import { defineCommand, runMain } from "citty";
import consola from "consola";
import { join, resolve } from "pathe";
import { description, name, version } from "../package.json";
import { generate } from "./generator";

const cwd = resolve(process.cwd());

const main = defineCommand({
  meta: { name, version, description, },
  args: {
    input: {
      type: "positional",
      default: join(cwd, "./openapi.yaml"),
      description: "Input OpenAPI file path",
    },
    output: {
      type: "string",
      alias: "o",
      default: join(cwd, "./routes"),
      description: "Output dir path",
    },
    overwrite: {
      type: "boolean",
      alias: "f",
      default: false,
      description: "force overwrite exist files",
    },
  },
  run: async ({ args }) => {
    consola.log(`i=${args.input}, o=${args.output}`);
    await generate({
      inputFilePath: args.input,
      outputDirPath: args.output,
      overwrite: args.overwrite,
    });
  },
});

runMain(main);
