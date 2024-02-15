import  Express  from "express"
import { actualizarTarea,
    agregarTarea,
    obtenerTarea,
    eliminarTarea,
    cambiarEstado}from "../controllers/Tareactr.js"
import checkAuth from "../middleware/checkAuth.js"
const router=Express.Router();

router.post("/",checkAuth,agregarTarea)




router
    .route("/:id")
    .get(checkAuth,obtenerTarea)
    .put(checkAuth,actualizarTarea)
    .delete(checkAuth,eliminarTarea)

router.post("/estado/:id",checkAuth,cambiarEstado)
export default router
