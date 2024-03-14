import Express  from "express";
import {
 nuevoDetalleEncuesta,obtenerDetallesEcuestas,mostrasRespuestas
} from '../controllers/detalleEncuestaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    
    .post(nuevoDetalleEncuesta)
    router.route('/crearRespuestas/:id')
    
    .get(obtenerDetallesEcuestas)
    
    router.route('/responde/:id')
    
    .get(mostrasRespuestas)

export default router