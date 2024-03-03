// routes/userRoutes.js

import { express } from "express";
const router = express.Router();
import UserController from '../controllers/UserController.mjs';


// Define user routes
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

module.exports = router;
