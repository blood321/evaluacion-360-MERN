import express from "express";

import { obtenerAprendiz, autenticar } from "../controllers/aprendiz.controller.js";

const router = express.Router();

router.get("/aviso/:email", obtenerAprendiz);
router.post("/autenticar", autenticar);

export default router;
