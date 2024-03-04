/**
 * @module otherUserRouter this is the module to route the otherUser
 */
// routes/otherUserRoutes.js
import express from "express";
import UserController from '../controllers/UserController.mjs';

const otherUser = express.Router();

// Define user routes
otherUserRouter.get('/', UserController.get);
otherUserRouter.post('/', UserController.post);

export default otherUserRouter;
