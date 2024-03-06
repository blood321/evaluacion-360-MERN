import preguntas from "../models/preguntas.js";
import tematicas from "../models/tematica.js";

const nuevaPreguntaParaAprendices = async (req, res) => {
  const { pregunta, tematicaId } = req.body;
  try {
    const tematica = await tematicas.findById(tematicaId);

    const nuevaPregunta = new preguntas({
      pregunta,
      tematica: [tematica._id],
      encuestado: "Aprendiz",
    });

    console.log(nuevaPregunta);

    res.json(nuevaPregunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la pregunta" });
  }
};
const nuevaPreguntaParaJefes = async (req, res) => {
  const { pregunta, tematicaId } = req.body;
  try {
    const tematica = await tematicas.findById(tematicaId);

    const nuevaPregunta = new preguntas({
      pregunta,
      tematica: [tematica._id],
      encuestado: "Jefes",
    });

    console.log(nuevaPregunta);

    res.json(nuevaPregunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la pregunta" });
  }
};
const nuevaPreguntaParaCompaneros = async (req, res) => {
  const { pregunta, tematicaId } = req.body;
  try {
    const tematica = await tematicas.findById(tematicaId);

    const nuevaPregunta = new preguntas({
      pregunta,
      tematica: [tematica._id],
      encuestado: "Compañeros",
    });

    console.log(nuevaPregunta);

    res.json(nuevaPregunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la pregunta" });
  }
};

const editarPregunta = async (req, res) => {
  const { id } = req.params;
  const preguntaEdit = await preguntas.findById(id);
  if (!preguntaEdit) {
    const error = new Error("no encontrado");
    return res.status(404).json({ msg: error.message });
  }
  preguntaEdit.pregunta = req.body.pregunta || preguntaEdit.pregunta;
  preguntaEdit.tematica = req.body.tematica || preguntaEdit.tematica;
  preguntaEdit.encuestado = req.body.encuestado || preguntaEdit.encuestado;

  try {
    const proyectoAlmacenado = await preguntaEdit.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};
const eliminarPregunta = async (req, res) => {
  const { id } = req.params;
  const preguntaDelete = await preguntas.findById(id);
  console.log(preguntaDelete);
  if (!preguntaDelete) {
    const error = new Error("No encontrado");

    return res.status(404).json({ msg: error.message });
  }

  try {
    await preguntaDelete.deleteOne();
    res.json({ msg: "pregunta  Eliminada" });
  } catch (error) {
    console.log(error);
  }
};
const obtenerPregunta = async (req, res) => {
  const { id } = req.body;

  try {
    const pregunta = await preguntas.findById(id);
    res.json(pregunta);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPreguntasParaAprendiz = async (req, res) => {
  const preguntasObtenidas = await preguntas.find();
  res.json(preguntasObtenidas);
};
const obtenerPreguntasParaJefes = async (req, res) => {
  const preguntasObtenidas = await preguntas.find({ encuestado: "Jefes" });
  res.json(preguntasObtenidas);
};
const obtenerPreguntasParaCompañeros = async (req, res) => {
  const preguntasObtenidas = await preguntas.find({ encuestado: "Compañeros" });
  res.json(preguntasObtenidas);
};

export {
  obtenerPreguntasParaCompañeros,
  nuevaPreguntaParaAprendices,
  editarPregunta,
  eliminarPregunta,
  obtenerPregunta,
  obtenerPreguntasParaAprendiz,
  obtenerPreguntasParaJefes,
  nuevaPreguntaParaJefes,
  nuevaPreguntaParaCompaneros,
};
