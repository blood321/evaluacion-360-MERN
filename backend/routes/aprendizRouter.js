import Express  from "express";
import { registrarAprendiz } from "../controllers/aprendizCrontroller";

const router = Express.Router()
router.route('/')
    
    .post(registrarAprendiz)
    


export default router