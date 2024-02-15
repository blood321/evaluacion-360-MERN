import Express  from "express";
import {
    obtenerEncuestas
} from '../controllers/respuesta.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    
    .post(checkAuth,obtenerEncuestas)
   
    


export default router