import XlsPopulate from "xlsx-populate";
import encuesta from "../models/encuesta.js";
import xlsx from "xlsx";
import aprendiz from "../models/aprendiz.js";
import fichas from "../models/fichas.js";
import Respuesta from "../models/respuestas.js";

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
    var nombreHoja = excel.SheetNames;
    let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos.numeroFicha);
    const aprendicesUnicos = [...new Set(datos.map((item) => item.aprendices))];
    const data = [];

    for (let index = 0; index < aprendicesUnicos.length; index++) {
      const element = aprendicesUnicos[index];
      const busca = await aprendiz.findOne({ numeroDocumento: element }, "_id");
      if (busca) {
        data.push(busca._id);
      }
    }

    const guardar = new fichas({
      numeroFicha: datos[0].numeroFicha,
      nombreDelPrograma: datos[0].nombreDelPrograma,
      aprendices: data,
    });

    const queSeGuardo = await guardar.save();
    console.log(queSeGuardo);

    res.status(200).send("Datos guardados correctamente.");
  } catch (error) {
    console.error("Error al crear el archivo de Excel:", error);
    res.status(500).send("Error al crear el archivo de Excel.");
  }
};
const subirProgramacion = async (req, res) => {};
const subirInstructores = async (req, res) => {};
const sacarReportes = async (req, res) => {
  const {id}= req.params
try {
    const data = await Respuesta.find({encuesta:id},'-aprendiz -_id -respondio -encuesta ').populate('instructor pregunta')
    const agrupado = data.map((item)=> ({instructor:item.instructor.nombre,pregunta:item.pregunta.pregunta,respuesta:item.respuesta}))
  
    const workbook = xlsx.utils.book_new();
  
    const dataArray = agrupado.map(item => Object.values(item));
    const dataa = [["Instructor", "Pregunta", "Ponderado"], ...dataArray];

    // Crear una hoja de trabajo
    const worksheet = xlsx.utils.aoa_to_sheet(dataa);
  
    // Agregar la hoja de trabajo al libro de trabajo
    xlsx.utils.book_append_sheet(workbook, worksheet, "Datos");
  
    // Escribir el libro de trabajo en un archivo
    xlsx.writeFile(workbook, "datos.xlsx");
  
    console.log("Archivo Excel generado correctamente.");
} catch (error) {
    console.log(error)
}
};
export {
  subirAprendices,
  subirFichas,
  subirInstructores,
  subirProgramacion,
  sacarReportes,
};
