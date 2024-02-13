import Express  from "express";
import {
    obtenerProyecto,
    nuevoProyecto,
    obtenerProyectos,
    eliminarCoaborador,
    eliminarProyecto,
    agregarColaboradores,
    editarProyecto,
    agregarProyecto,
    obtenerTareas
} from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = Express.Router()

// router.get('/',checkAuth, obtenerProyecto)
// router.post('/',checkAuth,nuevoProyecto)
router.route('/')
    .get(checkAuth,obtenerProyectos)
    .post(checkAuth,nuevoProyecto)

router.route('/:id')
    .get(checkAuth,obtenerProyecto)
    .put(checkAuth,editarProyecto)
    .delete(checkAuth,eliminarProyecto)
    
router.get('/tareas/:id', checkAuth,obtenerTareas)
router.post('/agregar-colaborador/:id',checkAuth,agregarColaboradores)
router.post('/eliminar-colaborador/:id',checkAuth,eliminarCoaborador)


export default router