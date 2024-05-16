import Express  from "express";
import {
 nuevoDetalleEncuesta,generarRespuestas,mostrasRespuestas,mostrarResultadosXencuestas,mostrarRespuestasXdetalleEncuesta
} from '../controllers/detalleEncuestaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
    router.route('/:id').post(nuevoDetalleEncuesta)
    router.route('/crearRespuestas/:id').get(generarRespuestas)
    router.route('/encuestasActivadas/:id').get(mostrarResultadosXencuestas)
    router.route('/respuestas/:id').get(mostrarRespuestasXdetalleEncuesta)
    router.route('/responde/:id').get(mostrasRespuestas)

export default router