import Express  from "express";
import {
 nuevoDetalleEncuesta,obtenerDetallesEcuestas,mostrasRespuestas
} from '../controllers/detalleEncuestaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    
    .post(nuevoDetalleEncuesta)
    router.route('/responde')
    .get(checkAuth,obtenerDetallesEcuestas)
    router.route('/responde-encuesta')
    .get(mostrasRespuestas)
    


export default router