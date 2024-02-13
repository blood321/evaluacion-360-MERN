import Express  from "express";
import {
 nuevoDetalleEncuesta
} from '../controllers/detalleEncuestactr.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevoDetalleEncuesta)


    


export default router