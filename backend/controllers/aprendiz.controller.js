import Aprendiz from "../models/aprendiz.js";
import { emailRegistro, emailAutenticar, emailOlvidePassword } from "../helpers/email.js";

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

const autenticar = async (req, res) => {
  const { email } = req.body;
  const aprendiz = await Aprendiz.findOne({ email });
  if (!aprendiz) {
    const error = new Error("El correo no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    // aprendiz.token = generarID();
    // await aprendiz.save();
    // Enviar el email de nueva confirmación
    emailAutenticar({
      email: aprendiz.email,
      nombre: aprendiz.nombre,
      token: aprendiz.token,
    });
    res.json({
      msg: "Hemos enviado un enlace de acceso a su correo electrónico",
    });
  } catch (error) {
    console.log(error);
  }
};

export { obtenerAprendiz, autenticar };
