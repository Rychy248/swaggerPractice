// app.js
import dotenv from 'dotenv';
import express from "express";
import authMiddleware from "./middleware/authMiddleware.mjs";
import urlFunction from './routers/urls.mjs';

import swaggerUi from "swagger-ui-express"
// yaml import
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import yaml from 'js-yaml';

function getSwaggerDoc() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.resolve(__dirname, './swagger/swagger-output.yaml');
  const yamlContent = fs.readFileSync(filePath, 'utf8');
  const swaggerDocument = yaml.load(yamlContent);
  console.log(swaggerDocument);
  return swaggerDocument;
};

(() => {
  dotenv.config({ path: `.env.local`, override: true });

  const app = express();
  console.log("ENV_: ",process.env.APP_PORT);
  console.log("ENV_: ",process.env.ENVIROMENT);
  // Middleware
  app.use(express.json()); // Parse JSON bodies
  app.use(authMiddleware); // Apply authentication middleware
  urlFunction(app);
  // Routes
  // app.use('/user', userRoutes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(getSwaggerDoc()));

  app.listen(process.env.APP_PORT, ((server)=>{
    console.log(`App served at port https://${process.env.HOST}:${process.env.APP_PORT}`);
  }));

})()
