const { readdir, readFile } = require('fs/promises')
const { ast: readAst, query } = require('@phenomnomnominal/tsquery')

const FILES_DIR = 'files'

async function run() {
  const fileNames = await readdir(FILES_DIR)

  for (const fileName of fileNames) {
    const data = await readFile(`${FILES_DIR}/${fileName}`, 'utf8')
    const ast = readAst(data);
    const nodes = query(ast, 'StringLiteral[value="label.field.no.scope"]')
    console.log(nodes);
  }

}

run().catch(console.error)
