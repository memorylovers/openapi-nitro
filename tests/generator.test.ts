import { compareSync } from "dir-compare";
import { rmSync } from "fs";
import { generate } from "../src/generator";

const fixtures = [
  "petstore",
];

vi.stubEnv("CONSOLA_LEVEL", "5");
fixtures.forEach(target => {
  test(`generator-fixtures-${target}`, async () => {
    const inputFilePath = `./tests/fixtures/${target}/openapi.yaml`;
    const outputDirPath = `./tests/fixtures/${target}/_actual/server/routes`;
    const expectedDirPath = `./tests/fixtures/${target}/_expected/server/routes`;

    rmSync(outputDirPath, { force: true, recursive: true });

    await generate({ inputFilePath, outputDirPath });

    const result = compareSync(outputDirPath, expectedDirPath,
      { compareDate: false, compareContent: true, compareSize: true }
    );
    expect(result.differences).toBe(0);
  });
});
