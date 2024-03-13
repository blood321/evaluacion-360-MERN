import Express  from "express";
import {
    respuestaUsuario
} from '../controllers/respuestaController.js'
import checkAuth from '../middleware/checkAuth.js'


const router = Express.Router()
router.route('/:id')
    .put(respuestaUsuario)
   


export default router