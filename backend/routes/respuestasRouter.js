import Express  from "express";
import {
    respuestaUsuario
} from '../controllers/respuestaController.js'
import checkAuth from '../middleware/checkAuth.js'


const router = Express.Router()
router.route('/i')
    router.get(respuestaUsuario)
   


export default router