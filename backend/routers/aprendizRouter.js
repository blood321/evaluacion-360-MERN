import Express  from "express";
import {
   nuevoAprendiz,perfil,autenticarAprendiz,confirmar
} from '../controllers/aprendizctr.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoAprendiz)
    router.route('/autenticar')
    
    .post(autenticarAprendiz)

    router.route('/confirmar:id')
    
    .get(confirmar)


export default router