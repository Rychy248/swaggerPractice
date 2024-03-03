
// YAML consumer
'use strict';
import fs from "fs";
import yaml from "js-yaml";
import { fileURLToPath } from "url";
import path from "path";

function yamlReminder(display) {
  console.log('-----------------------');
  console.log('FROM YAML PRACTICE');
  console.log(...display);
  console.log('-----------------------');  
};

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
    yamlReminder('Data from YAML',parsedData);
  } catch (e) {
    yamlReminder('Ups some Bad was happened: ',e);
  };
};

export default GNodeScript;