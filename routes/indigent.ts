import express from "express";
import { getAllIndigent } from "../controllers/indigentController";
const router = express.Router();

router.get("/", getAllIndigent);

export default router;
