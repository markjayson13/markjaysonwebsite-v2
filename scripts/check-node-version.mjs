const expectedMajor = 22;
const currentVersion = process.versions.node;
const currentMajor = Number.parseInt(currentVersion.split(".")[0] ?? "", 10);

if (currentMajor !== expectedMajor) {
  console.error(
    [
      `Unsupported Node.js version: ${currentVersion}.`,
      `This project requires Node ${expectedMajor}.x.`,
      "Run `nvm use` (or `nvm install 22.22.1 && nvm use 22.22.1`) and retry.",
    ].join("\n"),
  );
  process.exit(1);
}
