import Express  from "express";
import {
 nuevoDetalleEncuesta,obtenerDetallesEcuestas
} from '../controllers/detalleEncuestactr.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    
    .post(nuevoDetalleEncuesta)

    router.route('/responde2')
    
    .get(checkAuth,obtenerDetallesEcuestas)
    


export default router