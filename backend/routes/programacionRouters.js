import Express  from "express";
import {
    crearProgramacion
} from '../controllers/programacionController.js'


const router = Express.Router()
router.route('/')
    
    .post(crearProgramacion)
   
    


export default router