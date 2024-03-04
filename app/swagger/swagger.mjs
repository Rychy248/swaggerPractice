/**
 * @module swagger.mjs swagger generation
 */
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

import yaml from 'js-yaml';
import dotenv from 'dotenv';
import swaggerAutogen from 'swagger-autogen';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadDoc(params) {
  const filePath = path.resolve(__dirname, 'doc.yaml');
  let data = fs.readFileSync(filePath, 'utf8');
  
  data = data.replace(/\${([^}]*)}/g, (match, p1) => {
    const variableName = p1.replace(/\${|}/g, '');
    return process.env[variableName] || match
  });
  const doc = {... yaml.load(data)};
  console.log('Data from YAML',doc);

  return doc;
};

async function swaggerGen (){
  dotenv.config({ path: `.env.local`, override: true });

  try {
    
    const outputFile = `${__dirname}/swagger-output.yaml`;
    const routes = [`${__dirname}/../routers/urls.mjs`];
    const doc = loadDoc();
    /* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
    root file where the route starts, such as index.js, app.js, routes.js, etc ... */
    
    const specifications = await swaggerAutogen({openapi: '3.0.0'})(outputFile, routes, doc)
    console.log("specification",specifications);
    console.log(`Swagger YAML generated successfully into ${outputFile}`);
    const yamlFormat = yaml.dump(specifications.data);
    fs.writeFileSync(outputFile, yamlFormat, 'utf-8');

  } catch (e) {
    console.log('Ups some Bad was happened: ',e);
  };  
};

swaggerGen();
