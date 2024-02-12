import Express from "express";
const router = Express.Router();

import { 
    registrar,
    autenticar, 
    confirmar, 
    olvidePassword,
    comprobarToken, 
    nuevoPassword,
    perfil,
} from "../controllers/usuarioController.js"
import checkAuth from "../middleware/checkAuth.js";

// Autenticacion, registro, y confirmacion de Usuarios
router.post ('/', registrar); //Creacion de usuarios
router.post("/login", autenticar)
router .get ('/confirmar/:token', confirmar)
router.post ('/olvide-password', olvidePassword)
/*router.get ('/olvide-password/:token', comprobarToken)
router.post ('/olvide-password/:token', nuevoPassword)*/

router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

router.get('/perfil', checkAuth, perfil)

export default router;