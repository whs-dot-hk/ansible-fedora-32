const yaml = require("js-yaml");

const util = require("util");

const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const glob = util.promisify(require("glob"));

async function convert() {
  const files = await glob("**/tasks/main.yml");

  for (file of files) {
    const data = await readFile(file, "utf8");
    const obj = yaml.safeLoad(data);
    const sortedData = yaml.safeDump(obj, { sortKeys: true });

    await writeFile(file, sortedData);
  }
}

convert();
