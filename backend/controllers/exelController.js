import XlsPopulate from "xlsx-populate";
import encuesta from "../models/encuesta.js";
import xlsx from "xlsx";
import aprendiz from "../models/aprendiz.js";
import fichas from "../models/fichas.js";
import Respuesta from "../models/respuestas.js";
import programacion from "../models/programacionMov3.js";
import Instructor from "../models/instructor.js";

const subirAprendices = async (req, res) => {
  try {
    const file = req.file;
    const excel = xlsx.readFile(file);
    var nombreHoja = excel.SheetNames; //regresa un array }
    let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    for (let index = 0; index < datos.length; index++) {
      const datosGuardados = await new aprendiz(datos[index]);
      datosGuardados.save();
    }
    res.json({ msg: "Aprendices guardados con exito " });
  } catch (error) {
    console.error("Error al crear el archivo de Excel:", error);
    res.status(500).send("Error al crear el archivo de Excel.");
  }
};
const subirFichas = async (req, res) => {
  try {
    const file = req.file.path;
const excel = xlsx.readFile(file);
const nombreHoja = excel.SheetNames;
const datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

const necesario = {};

  for (const item of datos) {
    const numeroFicha = item.numeroFicha;

    if (!necesario[numeroFicha]) {
      necesario[numeroFicha] = {
        ficha: numeroFicha,
        nombreDelPrograma: item.nombreDelPrograma,
        fichaInicio: item.fichaInicio,
        fichaFin: item.fichaFin,
        fichaFinETP: item.fichaFinETP,
        aprendices: [], // Inicializamos un array para almacenar los aprendices
      };
    }

    const aprendizEncontrado = await aprendiz.findOne({ numeroDocumento: item.numeroDocumento });

    if (aprendizEncontrado) {
      necesario[numeroFicha].aprendices.push(aprendizEncontrado._id);
    } else {
      console.log(`No se encontró aprendiz con número de documento ${item.numeroDocumento}`);
    }
  }


// Llamar a la función asíncrona para procesar los datos

for (const key in necesario) {
  if (Object.hasOwnProperty.call(necesario, key)) {
    const element = necesario[key];

   
    const nuevasFichas = new fichas({
      numeroFicha: element.ficha, // Usar el primer elemento encontrado
      nombreDelPrograma: element.nombreDelPrograma, // Usar el primer elemento encontrado
      fichaInicio: element.inicioFormacion,
      fichaFin:element.fichaFin,
      aprendices: element.aprendices,
    });


    await nuevasFichas.save(); 
  }
}

console.log(necesario);

    res.status(200).send("Datos guardados correctamente.");
  } catch (error) {
    console.error("Error al crear el archivo de Excel:", error);
    res.status(500).send("Error al crear el archivo de Excel.");
  }
};
const subirProgramacion = async (req, res) => {
  try {
    const file = req.file.path;
    const excel = xlsx.readFile(file);
    var nombreHoja = excel.SheetNames; //regresa un array }
    let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    const necesario = [];

    datos.forEach((item) => {
      const Ficha = item.ficha;
      const INstructor = item.instructor;
      const inicioFormacion = item.inicioFormacion;
      const finalFormacion = item.finalFormacion;

      if (!necesario[INstructor]) {
        necesario[INstructor] = {
          ficha: Ficha,
          instructor: INstructor,
          inicioFormacion: inicioFormacion,
          finalFormacion: finalFormacion,
        };
      }
    });

    for (const key in necesario) {
      if (Object.hasOwnProperty.call(necesario, key)) {
        const element = necesario[key];

        // Buscar usuario por nombre
        const usuarios = await Instructor.find({ nombre: key });

        if (usuarios.length === 0) {
          const error = new Error(
            "Este instructor no existe en la base de datos" + key
          );
          return res.status(404).json({ msg: error.message });
        }

        // Buscar ficha por número de ficha
        const fichasEncontradas = await fichas.find({
          numeroFicha: element.ficha,
        });

        if (fichasEncontradas.length === 0) {
          const error = new Error(
            "Esta ficha no existe en la base de datos " + element.ficha
          );
          return res.status(404).json({ msg: error.message });
        }

        // Crear nueva programación
        const nuevaProgramacion = new programacion({
          ficha: fichasEncontradas[0]._id, // Usar el primer elemento encontrado
          instructor: usuarios[0]._id, // Usar el primer elemento encontrado
          fechaInicioFormacion: element.inicioFormacion,
          fechaFinFormacion: element.finalFormacion,
        });

        await nuevaProgramacion.save();
      }
    }
  } catch (error) {
    console.error("Error al crear el archivo de Excel:", error);
    res.status(500).send("Error al crear el archivo de Excel.");
  }
};

const subirInstructores = async (req, res) => {};

const sacarReportes = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Respuesta.find(
      { encuesta: id },
      "-aprendiz -_id -respondio -encuesta "
    ).populate("instructor pregunta");
    const agrupado = data.map((item) => ({
      instructor: item.instructor.nombre,
      pregunta: item.pregunta.pregunta,
      respuesta: item.respuesta,
    }));

    const workbook = xlsx.utils.book_new();

    const dataArray = agrupado.map((item) => Object.values(item));
    const dataa = [["Instructor", "Pregunta", "Ponderado"], ...dataArray];

    // Crear una hoja de trabajo
    const worksheet = xlsx.utils.aoa_to_sheet(dataa);

    // Agregar la hoja de trabajo al libro de trabajo
    xlsx.utils.book_append_sheet(workbook, worksheet, "Datos");

    // Escribir el libro de trabajo en un archivo
    xlsx.writeFile(workbook, "datos.xlsx");

    console.log("Archivo Excel generado correctamente.");
  } catch (error) {
    console.log(error);
  }
};
export {
  subirAprendices,
  subirFichas,
  subirInstructores,
  subirProgramacion,
  sacarReportes,
};
