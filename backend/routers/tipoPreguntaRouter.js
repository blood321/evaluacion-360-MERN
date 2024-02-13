import Express  from "express";
import {
    nuevoTipoPregunta
} from '../controllers/tipoPregunta.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoTipoPregunta)


    


export default router