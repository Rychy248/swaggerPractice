// app.js
import express from "express";
import userRoutes from "./routers/userRouter.mjs";
import authMiddleware from "./middleware/authMiddleware.mjs";

const APP_PORT = 3000;
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(authMiddleware); // Apply authentication middleware

// Routes
app.use('/user', userRoutes);

app.listen(APP_PORT, ((e)=>{
  console.log(`App served at port ${APP_PORT}`);
}));

export default app;