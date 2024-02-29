import Express  from "express";
import { respuestaUsuario
} from '../controllers/respuesta.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()
router.route('/')
    .put(checkAuth,respuestaUsuario)

   
    router.route('/nueva-respuesta')


export default router