import Express  from "express";
import {
    nuevoTipoPregunta
} from '../controllers/tipoPreguntaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoTipoPregunta)


    


export default router