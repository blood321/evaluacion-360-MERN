import express from "express";

import { obtenerAprendiz } from "../controllers/aprendiz.controller.js";

const router = express.Router();

router.get("/aviso/:email", obtenerAprendiz);

export default router;
