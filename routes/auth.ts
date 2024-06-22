import express from "express";
import { userLoginHandler } from "../controllers/UserController";
const router = express.Router();

router.post("/login", userLoginHandler);

export default router;
