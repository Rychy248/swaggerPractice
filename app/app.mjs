// app.js
import dotenv from 'dotenv';
import express from "express";
import authMiddleware from "./middleware/authMiddleware.mjs";
import urlFunction from './routers/urls.mjs';

(() => {
  dotenv.config({ path: `.env.local`, override: true });

  const app = express();
  console.log("ENV_: ",process.env.APP_PORT);
  console.log("ENV_: ",process.env.ENVIROMENT);
  // Middleware
  app.use(express.json()); // Parse JSON bodies
  app.use(authMiddleware); // Apply authentication middleware
  urlFunction(app);

  app.listen(process.env.APP_PORT, ((server)=>{
    console.log(`App served at port https://${process.env.HOST}:${process.env.APP_PORT}`);
  }));

})()
