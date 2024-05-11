import { trusted } from "mongoose";
import respuesta from "../models/respuestas.js";

const respuestaUsuario = async (req, res) => {
  const { instructor, pregunta, encuesta } = req.body;
  const { id } = req.params;

  try {
    const respuestasubir = await respuesta.findOne({
      instructor: instructor,
      pregunta: pregunta,
      aprendiz: id,
      encuesta: encuesta,
    });
    console.log(respuestasubir);
    if (!respuestasubir) {
      const error = new Error("no encontrado");
      return res.status(404).json({ msg: error.message });
    }
    respuestasubir.respuesta = req.body.respuesta;
    respuestasubir.respondio = true;
    respuestasubir.aprendiz = null;

    console.log(respuestasubir);
    const respondido = await respuestasubir.save();
    res.json(respondido);
  } catch (error) {
    console.log(error);
  }
};
const respuestaXEncuesta = async (req, res) => {
  const { id } = req.params;
  try {
    const respuestas = await respuesta
      .find({ encuesta: id })
      .populate("pregunta instructor");

    const preguntaPonderada = respuestas.map((item) => ({
      id: item.instructor.id,
      Instructor: item.instructor.nombre,
    }));

    const objetosUnicosSet = new Set(
      preguntaPonderada.map((objeto) => JSON.stringify(objeto))
    );

    const objetosUnicos = Array.from(objetosUnicosSet).map((objeto) =>
      JSON.parse(objeto)
    );

    // Imprimimos el objeto resultante

    // Objeto para contar la frecuencia de cada instructor
    const contador = {};

    // Contar la frecuencia de cada instructor
    preguntaPonderada.forEach((dato) => {
      const { id, Instructor } = dato;
      const clave = `${id}-${Instructor}`;
      contador[clave] = (contador[clave] || 0) + 1;
    });

    // Crear un array de objetos con el nombre del instructor, su ID y el número de duplicados
    const resultado = Object.keys(contador).map((clave) => {
      const [id, instructor] = clave.split("-");
      return { id, instructor, respuestas: contador[clave] };
    });
    res.json(resultado);
  } catch (error) {
    console.log(error);
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

const respuestasXInstructor = async (req, res) => {
  const { id, instructor } = req.params;

  const data = await respuesta
    .find({ encuesta: id, instructor: instructor })
    .populate("instructor pregunta");
  const simplificado = data.map((item) => ({
    instructor: item.instructor.nombre,
    pregunta: item.pregunta.pregunta,
    resultado: item.respuesta,
  }));
  const caja = {};
  const resultadosPosibles = {};
  simplificado.forEach(dato => {
    const pregunta = dato.pregunta;
    if (!resultadosPosibles.hasOwnProperty(pregunta)) {
      resultadosPosibles[pregunta] = 1;
    } else {
      resultadosPosibles[pregunta]++;
    }
  });
  
  simplificado.forEach(dato => {
    const pregunta = dato.pregunta;
    const resultado = parseInt(dato.resultado); 
  
    if (caja.hasOwnProperty(pregunta)) {
      caja[pregunta] += resultado;
    } else {
      caja[pregunta] = resultado;
    }
  });
  
  Object.keys(caja).forEach(pregunta => {
    const sumaResultados = caja[pregunta];
    const totalResultadosPosibles = resultadosPosibles[pregunta];
    const promedio = sumaResultados / totalResultadosPosibles;
    caja[pregunta] = promedio;
  });
  
  res.json(caja);
};
export {
  respuestaUsuario,
  respuestaXEncuesta,
  respuestaXEquipoEjecutor,
  respuestasXInstructor,
};
