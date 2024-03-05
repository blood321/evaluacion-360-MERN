import Aprendiz from "../models/aprendiz";

const obtenerAprendiz = async (req, res) => {
    const data = req.params.email;
    const email = data;
    const aprendiz = await Aprendiz.findOne({ email });
    if (!aprendiz) {
      const error = new Error("El usuario no existe");
      return res.status(404).json({ msg: error.message });
    } else {
      res.json(aprendiz.nombre);
    }
  };

  export {
    obtenerAprendiz,
  }