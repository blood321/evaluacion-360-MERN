import express from "express";

import { perfilInstructor } from "../controllers/instructor.controller.js";

const router = express.Router();

router.get('/perfil-instructor/:id', perfilInstructor);

export default router;