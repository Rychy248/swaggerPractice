

// YAML consumer
'use strict';
import fs from "fs";
import yaml from "js-yaml";
import { fileURLToPath } from "url";
import path from "path";

/**
 * This function print the lecture from a YAML file, 'GYamlAndProgrammingLanguages.yaml'
 */
export const GNodeScript = ()=> {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, 'GYamlAndProgrammingLanguages.yaml');
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = yaml.load(data);
    console.log('Data from YAML',parsedData);
  } catch (e) {
    console.log('Ups some Bad was happened: ',e);
  };
};

export default GNodeScript;