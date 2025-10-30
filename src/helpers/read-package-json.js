import fs from 'node:fs';
import path from 'node:path';

/**
 * Add new line to end of file
 */
const readPackageJson = (filePath) => {
  const projectRoot = process.cwd();
  const fullPath = path.resolve(projectRoot, filePath);

  return JSON.parse(
    fs.readFileSync(fullPath, 'utf8')
  );
}

export default readPackageJson;
