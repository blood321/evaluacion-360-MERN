import preguntas from "../models/preguntas.js";
import encuesta from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";
import fichas from "../models/fichas.js";
import Usuario from "../models/Usuario.js";
import programacion from "../models/programacionMov3.js";
import Respuesta from "../models/respuestas.js";
import aprendiz from "../models/aprendiz.js";

const nuevoDetalleEncuesta = async (req, res) => {
  //en postman se deben poner estas constates en ves de las del modelo
  const  {id}  = req.params;
  const {fecha} =req.body
  try {
    console.log(id);
    const fechaActual = new Date();
    console.log(fechaActual);

    // Busca la encuesta por su id
    const encuestas = await encuesta.findById(id);
    console.log(encuestas)
    encuestas.activa =true
    const guarda=await encuestas.save()
    console.log(guarda+"esto guarda")
    if (!encuestas) {
      res.json({ msg: " la encuesta no existe " });
    }
    //busca la ficha por su idf
    const ficha = await fichas.find({ fichaFin: { $lt: new Date() } }, "_id");
    console.log(ficha);

    // // Crea la nueva pregunta con los datos proporcionados
    const nuevaPregunta = new detalleEncuesta({
      encuesta: encuestas,
      fichas: ficha,
      fechaDesactivar:fecha
     });
    console.log("esta es la nueva pregunta " + nuevaPregunta);

    // Guarda la pregunta en la base de datos
    const preguntaGuardada = await nuevaPregunta.save();

    // res.status(201).json(preguntaGuardada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al crear el borrador de la encuesta" });
  }
};
const obtenerDetallesEncuestas = async (req, res) => {
  const { id } = req.params;
  try {
    const respuestasExistentes = await Respuesta.findOne({ aprendiz: id });
    if (respuestasExistentes) {
      const error = new Error("El usuario ya tiene respuestas creadas");
      return res.status(404).json({ msg: error.message });
    }
    const usuario = await aprendiz.findOne({ _id: id });
    console.log(usuario + "ets");
    const fichaUsuario = await fichas.find({ aprendices: usuario }, "_id");
    console.log(fichaUsuario);

    const instructoresResponder = await programacion.find(
      { fichas: fichaUsuario },
      "instructores"
    );
    console.log(instructoresResponder);

    const encuestasID = await detalleEncuesta
      .find({ fichas: fichaUsuario })
      .distinct("encuesta");

    const buscarEncuestaParaGuardarEnRespuestas = await encuesta
      .find({ _id: { $in: encuestasID } })
      .select(
        "-nombre -fechaCreado -tiempoResponder -preguntas -encuestado -activa -__v"
      );

    const mostrarPregunta = await encuesta
      .find({ activa: true, _id: { $in: encuestasID } })
      .select(
        "-_id -fechaCreado -tematica -__v -encuestado -nombre -tiempoResponder -activa"
      );

    for (const instruccion of instructoresResponder) {
      for (const instructorId of instruccion.instructores) {
        for (const pregunta of mostrarPregunta) {
          for (const preguntaId of pregunta.preguntas) {
            const nuevaRespuesta = new Respuesta({
              pregunta: preguntaId,
              aprendiz: usuario,
              instructor: instructorId,
              encuesta: buscarEncuestaParaGuardarEnRespuestas[0],
            });
            const respug = await nuevaRespuesta.save();
            console.log(respug);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
const mostrasRespuestas = async (req, res) => {
  const { id } = req.params;

  try {
    const inpuestoss = await Respuesta.find({ aprendiz: id }).populate(
      "pregunta instructor encuesta"
    );
    res.json(inpuestoss);
  } catch (error) {
    console.log(error);
  }
};

export { nuevoDetalleEncuesta, obtenerDetallesEncuestas, mostrasRespuestas };
