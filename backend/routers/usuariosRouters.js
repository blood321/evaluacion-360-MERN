import Express  from "express";
const router = Express.Router();
import checkAuth from "../middleware/checkAuth.js";
import {registrar,autenticar,confirmar, olvidePassword,comprobarToken,
nuevoPassword,perfil} from "../controllers/usuarioCtls.js";
//Creación,registro y confirmación de usuarios 
router.post('/',registrar);
router.post("/login",autenticar);
router.get('/confirmar/:token',confirmar);
router.post('/olvide-password', olvidePassword);
// router.get('/olvide-password/:token', comprobarToken);
// router.post('olvide-password/:token', nuevoPassword);

router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);
router.get('/perfil',checkAuth,perfil)

export default router
