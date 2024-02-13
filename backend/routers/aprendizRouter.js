import Express  from "express";
import {
   nuevoAprendiz,perfil,
} from '../controllers/aprendizctr.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoAprendiz)


    


export default router