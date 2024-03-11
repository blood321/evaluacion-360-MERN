import express from 'express'
import {
    register,
    auth,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
    obtenerUsuario,
} from '../controllers/usuario.controller.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.post('/', register)
router.get('/aviso/:email', obtenerUsuario)

router.post('/login', auth)
router.get('/confirmar/:token', confirmar)
router.post('/autenticar', autenticar)
router.post('/olvide-password', olvidePassword)
// router.get('/olvide-password/:token', comprobarToken);
// router.post('/olvide-password/:token', nuevoPassword);

router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

router.get('/perfil', checkAuth, perfil)

export default router
