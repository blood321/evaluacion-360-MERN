import { trusted } from "mongoose";
import Respuesta from "../models/respuestas.js";
import encuesta from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";
import papelera from "../models/papelera.js";
import aprendiz from "../models/aprendiz.js";
const respuestaUsuario = async (req, res) => {
  const data = req.body;
  console.log(data);
  data.forEach(async (element) => {
    element[1].forEach(async (item) => {
      const { respuesta, id } = item;
      console.log(typeof respuesta);
      try {
        const respuestasubir = await Respuesta.findOne({_id: id});
        if (!respuestasubir) {
          const error = new Error("no encontrado");
          return res.status(404).json({ msg: error.message });
        }
        respuestasubir.respuesta = respuesta;
        respuestasubir.respondio = true;
        respuestasubir.aprendiz = null;

        const respondido = await respuestasubir.save();
        const borrador = new papelera({
          aprendiz: id,
          detalleEncuesta: encuesta,
          pregunta: pregunta,
          respuesta: req.body.respuesta,
        });
        borrador.save();
        // console.log(borrador);
        res.json(respondido);
      } catch (error) {
        console.log(error);
      }

      // Imprime cada ID
    });
  });
};

const respuestaXEncuesta = async (req, res) => {
  const { id } = req.params;
  //se requiere el id de la encuesta
  const activaciones = await detalleEncuesta.find(
    { encuesta: id },
    "-fichas -encuesta -fechaDesactivar -activa -__v"
  );
  res.json(activaciones);
};
const respuestasXDetalleEncuesta = async (req, res) => {
  const { id } = req.params;
  try {
    const respuestas = await respuesta
      .find({ encuesta: id })
      .populate("pregunta instructor");

    const respuestasPorInstructor = {};

    respuestas.forEach((item) => {
      const idInstructor = item.instructor.id;
      const pregunta = item.pregunta.pregunta;

      if (!respuestasPorInstructor[idInstructor]) {
        respuestasPorInstructor[idInstructor] = {
          id: idInstructor,
          instructor: item.instructor.nombre,
          totalRespuestas: 0,
        };
      }

      respuestasPorInstructor[idInstructor].totalRespuestas++;
    });

    const resultadoFinal = Object.values(respuestasPorInstructor);

    res.json(resultadoFinal);
  } catch (error) {
    console.log(error);
  }
};

const respuestasXInstructor = async (req, res) => {
  const { id, instructor } = req.params;
  try {
    const respuestas = await respuesta
      .find({ encuesta: id, instructor: instructor })
      .populate("pregunta instructor");

    const respuestasPorInstructor = {};

    respuestas.forEach((item) => {
      const idInstructor = item.instructor.id;
      const pregunta = item.pregunta.pregunta;
      const respuesta = item.respuesta;

      if (!respuestasPorInstructor[idInstructor]) {
        respuestasPorInstructor[idInstructor] = {
          id: idInstructor,
          instructor: item.instructor.nombre,
          totalRespuestas: 0,
          respuestas: {},
        };
      }

      if (!respuestasPorInstructor[idInstructor].respuestas[pregunta]) {
        respuestasPorInstructor[idInstructor].respuestas[pregunta] = [];
      }

      respuestasPorInstructor[idInstructor].respuestas[pregunta].push(
        respuesta
      );
      respuestasPorInstructor[idInstructor].totalRespuestas++;
    });

    const resultadoFinal = Object.values(respuestasPorInstructor);

    res.json(resultadoFinal);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error en el servidor" });
  }
};
const respuestaXEquipoEjecutor = async (req, res) => {
  const { id } = req.params;
  try {
    const respuestasDeEquipo = await equipoEjecutor.find({ _id: id });
  } catch (error) {
    console.log(error);
  }
};
export {
  respuestaUsuario,
  respuestaXEncuesta,
  respuestaXEquipoEjecutor,
  respuestasXInstructor,
  respuestasXDetalleEncuesta,
};
