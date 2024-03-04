/**
 * @module userRouter this is the module to route the user
 */
// routes/userRoutes.js
import express from "express";
// import swaggerUi from "swagger-ui-express"
// yaml import
// import fs from "fs";
// import { fileURLToPath } from "url";
// import path from "path";
// import yaml from 'js-yaml';

import userRouter from "./userRoute.mjs";

// function getSwaggerDoc() {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   const filePath = path.resolve(__dirname, '../swagger/swagger-output.yaml');
//   const yamlContent = fs.readFileSync(filePath, 'utf8');
//   const swaggerDocument = yaml.load(yamlContent);
//   console.log(swaggerDocument);
//   return swaggerDocument;
// };

/**
 * @description this is the principal/root router for all the api
 * @param { Express.app } app the core app
 * @returns { Express.Router }
 */
function urlFunction(app) {
  const swaggerPractice = express.Router();
  swaggerPractice.use('/user', userRouter);
  swaggerPractice.use('/otherUser', userRouter);


  // const swaggerDocument = getSwaggerDoc();
  // swaggerPractice.use('/swaggerAPI/docs', swaggerUi.serve);
  // swaggerPractice.get('/swaggerAPI/docs', swaggerUi.setup(swaggerDocument));

  app.use("/swaggerAPI", swaggerPractice);


};

export default urlFunction;