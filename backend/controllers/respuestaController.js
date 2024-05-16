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
    const instructorXnombre = respuestas.map((item) => ({
      id: item.instructor.id,
      instructor: item.instructor.nombre,
    }));
    const instructorXrespuesta = respuestas.map((item) => ({
      id: item.instructor.id,
      respuesta: item.respuesta,
    }));

   
    const objetosUnicosSet = new Set(
      instructorXnombre.map((objeto) => JSON.stringify(objeto))
    );
    const objetosUnicos = Array.from(objetosUnicosSet).map((objeto) =>
      JSON.parse(objeto)
    );

    const respuestasPorInstructor = {};

    instructorXrespuesta.forEach((respuesta) => {
      const idInstructor = respuesta.id;
      const respuestaActual = respuesta.respuesta;

      // Si el ID del instructor no está en el objeto, se crea un nuevo array para almacenar las respuestas
      if (!respuestasPorInstructor[idInstructor]) {
        respuestasPorInstructor[idInstructor] = [];
      }

      // Se añade la respuesta al array correspondiente
      respuestasPorInstructor[idInstructor].push(respuestaActual);
    });
    const contador = {};

    instructorXnombre.forEach((dato) => {
      const { id, instructor } = dato;
      const clave = `${id}-${instructor}`;

      if (contador[clave]) {
        contador[clave].respuestas++;
      } else {
        contador[clave] = {
          id: id,
          instructor: instructor,
          respuestas: 1,
          respuestasAsociadas: [], // Inicialmente vacío
        };
      }

    });

    const resultado = Object.keys(contador).map((clave) => {
      const [id, instructor] = clave.split("-");
      return { id, instructor, respuestas: contador[clave] };
    });

    const resultadoFinal = resultado.map((instructor) => {
      const respuestas = respuestasPorInstructor[instructor.id];
      const respuestasValidas = respuestas.filter(
        (respuesta) => respuesta !== ""
      );
      return {
        id: instructor.id,
        instructor: instructor.instructor,
        totalRespuestas: respuestasValidas.length,
        respuestas: respuestasValidas,
       
      };
    });

    // Iterar sobre cada objeto en el array
for (const objeto of resultadoFinal) {
  console.log(`Instructor: ${objeto.instructor}`);
  console.log(`Total de respuestas: ${objeto.totalRespuestas}`);
  console.log('Respuestas:');
  
  // Iterar sobre el array de respuestas dentro de cada objeto
  for (const respuesta of objeto.respuestas) {
    console.log(respuesta);
  }
  
  console.log('-------------------------');
}
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
