import Express from "express";
import {
  editarPregunta,
  eliminarPregunta,
  obtenerPregunta,
  obtenerPreguntasParaAprendiz,
  obtenerPreguntasParaCompañeros,
  obtenerPreguntasParaJefes,
  nuevaPreguntaParaAprendices,
  nuevaPreguntaParaCompaneros,
  nuevaPreguntaParaJefes,
} from "../controllers/preguntasController.js";

const router = Express.Router();
router.route("/").get(obtenerPregunta);

router.route("/crear-preguntas-jefes/").post(nuevaPreguntaParaJefes);

router.route("/crear-preguntas-Compañeros").post(nuevaPreguntaParaCompaneros);

router.route("/crear-preguntas-Aprendices").post(nuevaPreguntaParaAprendices);

router.route("/listar-preguntas-jefes/").get(obtenerPreguntasParaJefes);

router.route("/listar-preguntas-Compañeros").get(obtenerPreguntasParaCompañeros);

router.route("/listar-preguntas-Aprendices").get(obtenerPreguntasParaAprendiz);

router
  .route("/:id")
  .get(obtenerPregunta)
  .put(editarPregunta)
  .delete(eliminarPregunta);

export default router;
