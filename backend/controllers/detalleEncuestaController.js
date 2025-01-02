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
  const { id } = req.params;
  const { fecha } = req.body;
  try {
    // Busca la encuesta por su id
    const encuestas = await encuesta.findById(id);
    encuestas.activa = true;
    if (!encuestas) {
      res.json({ msg: " la encuesta no existe " });
    }
    await encuestas.save();
    //busca la ficha por su id las cuales  tiene una fecha anterior a la fecha y hora actual.
    const ficha = await fichas.find({ fichaFin: { $lt: new Date() } }, "_id");

    // // Crea el nuevo detalle de la encuesta  con los datos proporcionados
    const nuevoDEtalle = new detalleEncuesta({
      encuesta: encuestas,
      fichas: ficha,
      fechaDesactivar: fecha,
      activa: true,
    });

    // Guarda la pregunta en la base de datos
    const detalleGuardado = await nuevoDEtalle.save();

    res.status(201).json(detalleGuardado);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al crear el borrador de la encuesta" });
  }
};
const generarRespuestas = async (req, res) => {
  //ID del aprendiz
  const { id } = req.params;
  try {
    //se vefifica si el usuario ya tiene respuestas creadas para el detalle de la encuesta
    const respuestasExistentes = await Respuesta.findOne({ aprendiz: id });
    if (respuestasExistentes) {
      const error = new Error("El usuario ya tiene respuestas creadas");
      return res.status(404).json({ msg: error.message });
    }
    //si no las tiene busca el usuario
    const usuario = await aprendiz.findOne({ _id: id });
    //busca la ficha a la que pertenece el aprendiz
    const fichaUsuario = await fichas
      .findOne({ aprendices: usuario })
      .distinct("_id");
    //busca a los instructores que le hayan dado calse al aprendiz

    const instructoresResponder = await programacion
      .find({ ficha: fichaUsuario })
      .distinct("instructor");
    // se busca la encuesta activa y asociada al la ficha
    const encuestasID = await detalleEncuesta
      .find({ activa: true })
      .distinct("encuesta");
    //se busca el id del detalle de la encuesta que este ligada al paso anterior, el detalle de la encuesta tambiem debe estar activa
    const mostrarPregunta = await encuesta
      .find({ _id: encuestasID })
      .select(
        "-_id -fechaCreado -tematica -__v -encuestado -nombre -tiempoResponder -activa -descripcion"
      );
    // Itera sobre cada instrucción en la lista de instructores a responder
    for (const key in instructoresResponder) {
      if (Object.hasOwnProperty.call(instructoresResponder, key)) {
        const element = instructoresResponder[key];
        for (const pregunta of mostrarPregunta) {
          // Itera sobre cada identificador de pregunta en la lista de preguntas de la pregunta actual
          for (const preguntaId of pregunta.preguntas) {
            // Crea una nueva instancia del modelo Respuesta con los datos correspondientes
            const nuevaRespuesta = new Respuesta({
              pregunta: preguntaId, // Asigna el identificador de la pregunta
              aprendiz: usuario, // Asigna el usuario actual como el aprendiz
              instructor: element, // Asigna el identificador del instructor
              encuesta: encuestasID, // Asigna el identificador de la encuesta
            });
            // Guarda la nueva respuesta en la base de datos
            await nuevaRespuesta.save();
          }
        }
      }
    }
    // Itera sobre cada pregunta en la lista de preguntas a mostrar
    // Después de que todos los bucles hayan terminado, envía la respuesta una sola vez
    res.json({ message: "Respuestas guardadas exitosamente" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
const mostrasRespuestas = async (req, res) => {
  //id del aprendz
  const { id } = req.params;
  try {
    //muestra  las respuestas que debe responder el aprendiz
    const respuestas = await Respuesta.find({ aprendiz: id }).populate(
      "pregunta instructor encuesta"
    );
    const preguntasFrontend = {};
    for (let index = 0; index < respuestas.length; index++) {}

    respuestas.forEach((item) => {
      const idrespuesta = item.id;
      const Pregunta = item.pregunta;
      const Instructor = item.instructor
     

      if(!preguntasFrontend[Pregunta.pregunta]){
        preguntasFrontend[Pregunta.pregunta] = [];
      }

      console.log(preguntasFrontend[Pregunta.pregunta])
      if(preguntasFrontend[Pregunta.pregunta]){
        preguntasFrontend[Pregunta.pregunta].push({
          id: idrespuesta,
          instructor: Instructor.nombre,
          respuesta:""
          
        });
      }

    });
    res.json(preguntasFrontend)
  } catch (error) {
    console.log(error);
  }
};
const mostrarResultadosXencuestas = async (req, res) => {
  try {
    const { id } = req.params;

    const Resultados = await detalleEncuesta.find({ encuesta: id });
    res.json(Resultados);
  } catch (error) {
    console.log(error);
  }
};
const mostrarRespuestasXdetalleEncuesta = async (req, res) => {
  const { id } = req.params;
  const Respuestas = await Respuesta.find({ encuesta: id });
  res.json(Respuestas);
};
export {
  nuevoDetalleEncuesta,
  generarRespuestas,
  mostrasRespuestas,
  mostrarResultadosXencuestas,
  mostrarRespuestasXdetalleEncuesta,
};
