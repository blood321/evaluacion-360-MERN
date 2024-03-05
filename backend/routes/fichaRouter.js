import Express  from "express";
import {
    nuevaFicha
} from '../controllers/fichaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaFicha)
   
    


export default router