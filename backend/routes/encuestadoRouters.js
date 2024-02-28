import Express  from "express";
import {
nuevoencuestado
} from '../controllers/encuestadoController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoencuestado)


export default router