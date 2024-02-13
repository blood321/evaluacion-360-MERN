import Express  from "express";
import {
    nuevaFicha
} from '../controllers/fichactr.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaFicha)
   
    


export default router