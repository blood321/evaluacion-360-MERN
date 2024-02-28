import Express  from "express";
import {
    obtenerRespuestas,nuevaRespuesta
} from '../controllers/respuestaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    .get(obtenerRespuestas)
    .post(checkAuth,obtenerRespuestas)
   
    router.route('/nueva-respuesta')
    .post(nuevaRespuesta)


export default router