// routes/userRoutes.js
import express from "express";
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

// Define user routes
router.get('/', UserController.get);
router.post('/', UserController.post);

export default router;
