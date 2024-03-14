import Express  from "express";
import {
 nuevoDetalleEncuesta,obtenerDetallesEncuestas,mostrasRespuestas
} from '../controllers/detalleEncuestaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    
    .post(nuevoDetalleEncuesta)
    router.route('/crearRespuestas/:id')
    
    .get(obtenerDetallesEncuestas)
    
    router.route('/responde/:id')
    
    .get(mostrasRespuestas)

export default router