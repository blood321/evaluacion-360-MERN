import express from "express"

import {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado,
} from "../controllers/tareaController.js"
import checkAuth from "../middleware/checkAuth.js"

const router = express.Router ()
    router.post("/",checkAuth, agregarTarea) //Crear una tarea
    router
        .route("/:id")
        .get(checkAuth, obtenerTarea) //Obtener una tarea por ID
        .put(checkAuth, actualizarTarea) //Actualizar una tarea
        .delete(checkAuth, eliminarTarea) //Eliminar una tarea

    router.post("/estado/:id", checkAuth, cambiarEstado)

export default router