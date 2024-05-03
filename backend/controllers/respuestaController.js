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

export { respuestaUsuario };
