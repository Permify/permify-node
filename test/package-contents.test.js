const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { mkdtempSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");
const test = require("node:test");

const packageRoot = path.resolve(__dirname, "..");

test("packed package excludes generated TypeScript sources", () => {
  const packDirectory = mkdtempSync(path.join(tmpdir(), "permify-node-pack-"));

  try {
    const output = execFileSync(
      "npm",
      ["pack", "--json", "--pack-destination", packDirectory],
      { cwd: packageRoot, encoding: "utf8" },
    );
    const [{ filename }] = JSON.parse(output);
    const archivePath = path.join(packDirectory, filename);
    const files = execFileSync("tar", ["-tzf", archivePath], {
      encoding: "utf8",
    })
      .trim()
      .split("\n");
    const generatedDirectory = "package/dist/src/grpc/generated/";
    const generatedDeclarations = files.filter(
      (file) => file.startsWith(generatedDirectory) && file.endsWith(".d.ts"),
    );
    const generatedSources = files.filter(
      (file) =>
        file.startsWith(generatedDirectory) &&
        file.endsWith(".ts") &&
        !file.endsWith(".d.ts"),
    );

    assert.deepEqual(generatedSources, []);
    assert.ok(generatedDeclarations.length > 0, "generated declarations are packed");

    for (const declaration of generatedDeclarations) {
      assert.ok(
        files.includes(declaration.replace(/\.d\.ts$/, ".js")),
        `compiled JavaScript is packed for ${declaration}`,
      );
    }
  } finally {
    rmSync(packDirectory, { recursive: true, force: true });
  }
});
