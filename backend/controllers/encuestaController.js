import encuesta from "../models/encuesta.js";
import tematicas from "../models/tematica.js";

const nuevaEncuesta = async (req, res) => {
  const encuestaNueva = new encuesta(req.body);

  try {
    const encuestaAlmacenada = await encuestaNueva.save();

    res.json(encuestaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const obtenerEncuesta = async (req, res) => {
  const encuestas = await encuesta.findById(req.params);
  res.json(encuestas);
};
const editarEncuesta = async (req, res) => {
  // el id de la encuesta que se quiere editar
  const { id } = req.params;

  const encuestaEdit = await encuesta.findById(id);

  if (!encuestaEdit) {
    const error = new Error("no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  encuestaEdit.Nombre = req.body.Nombre || encuestaEdit.Nombre;

  encuestaEdit.fechaCreado = req.body.fechaCreado || encuestaEdit.fechaCreado;

  encuestaEdit.tematica = req.body.tematica || encuestaEdit.tematica;

  encuestaEdit.preguntas = req.body.preguntas || encuestaEdit.preguntas;

  try {
    const editEncuesta = await encuestaEdit.save();
    res.json(editEncuesta);
  } catch (error) {
    console.log(error);
  }
};
const eliminarEncuesta = async (req, res) => {
  const { id } = req.params;
  const encuestaDelete = await encuesta.findById(id);
  console.log(encuestaDelete);
  if (!encuestaDelete) {
    const error = new Error("No encontrado");

    return res.status(404).json({ msg: error.message });
  }

  try {
    await encuestaDelete.deleteOne();
    res.json({ msg: "encuesta eliminada" });
  } catch (error) {
    console.log(error);
  }
};
const listarEncuestas = async (req, res) => {
  try {
    const lista = await encuesta.find();
    res.json(lista);
  } catch (error) {
    console.log(error);
  }
};
export {
  nuevaEncuesta,
  editarEncuesta,
  eliminarEncuesta,
  obtenerEncuesta,
  listarEncuestas,
};
