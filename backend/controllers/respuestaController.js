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
          respuestas: {}
        };
      }
  
      if (!respuestasPorInstructor[idInstructor].respuestas[pregunta]) {
        respuestasPorInstructor[idInstructor].respuestas[pregunta] = [];
      }
  
      respuestasPorInstructor[idInstructor].respuestas[pregunta].push(respuesta);
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
  // const caja = {};
  const resultadosPosibles = {};
  simplificado.forEach((dato) => {
    const pregunta = dato.pregunta;
    if (!resultadosPosibles.hasOwnProperty(pregunta)) {
      resultadosPosibles[pregunta] = 1;
    } else {
      resultadosPosibles[pregunta]++;
    }
  });

  // simplificado.forEach(dato => {
  //   const pregunta = dato.pregunta;
  //   const resultado = parseInt(dato.resultado);

  //   console.log(pregunta+ "  Resultado "+resultado)
  //   if (caja.hasOwnProperty(pregunta)) {
  //     caja[pregunta] += [resultado] ;
  //   } else {
  //     caja[pregunta] = resultado;
  //   }
  // });
  const contador = {};

  // Contar la frecuencia de cada instructor
  simplificado.forEach((dato) => {
    const { pregunta } = dato;
    const clave = `${pregunta}`;
    contador[clave] = (contador[clave] || 0) + 1;
  });

  // Crear un array de objetos con el nombre del instructor, su ID y el número de duplicados
  const resultado = Object.keys(contador).map((clave) => {
    const [pregunta] = clave.split("-");
    return { pregunta, respuestas: contador[clave] };
  });

  res.json(resultado);
  // Object.keys(caja).forEach(pregunta => {
  //   const sumaResultados = caja[pregunta];
  //   const totalResultadosPosibles = resultadosPosibles[pregunta];
  //   const promedio = sumaResultados / totalResultadosPosibles;

  //   caja[pregunta] = promedio;
  // });
};
export {
  respuestaUsuario,
  respuestaXEncuesta,
  respuestaXEquipoEjecutor,
  respuestasXInstructor,
};
