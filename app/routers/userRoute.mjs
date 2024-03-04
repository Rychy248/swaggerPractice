/**
 * @module userRouter this is the module to route the user
 */
// routes/userRoutes.js
import express from "express";
import UserController from '../controllers/UserController.mjs';

const userRouter = express.Router();

// Define user routes
userRouter.get('/', UserController.get);
userRouter.post('/', UserController.post);

export default userRouter;
