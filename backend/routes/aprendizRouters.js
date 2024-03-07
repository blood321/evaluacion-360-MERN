import Express  from "express";
import { registrarAprendiz } from "../controllers/aprendizController.js";

const router = Express.Router()
router.route('/')
    
    .post(registrarAprendiz)
    


export default router