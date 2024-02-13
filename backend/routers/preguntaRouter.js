import Express  from "express";
import {
   nuevaPregunta
} from '../controllers/ctrPreguntas.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaPregunta)
    
    .get(nuevaPregunta)


export default router