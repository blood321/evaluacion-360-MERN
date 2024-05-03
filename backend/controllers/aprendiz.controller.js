import Aprendiz from '../models/aprendiz.js'
import Usuario from '../models/Usuario.js'
import { emailRegistro, emailAutenticar, emailOlvidePassword } from '../helpers/email.js'

const obtenerAprendiz = async (req, res) => {
    const data = req.params.id
    const id = data
    const aprendiz = await Usuario.findById({ _id: id })
    if (!aprendiz) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ msg: error.message })
    } else {
        res.json(aprendiz)
    }
}

const autenticar = async (req, res) => {
    const { email } = req.body
    const aprendiz = await Usuario.findOne({ email })
    if (!aprendiz) {
        const error = new Error('El correo no existe')
        return res.status(404).json({ msg: error.message })
    }

    try {
        // usuario.token = generarID();
        // await usuario.save();
        // Enviar el email de nueva confirmación
        emailAutenticar({
            id: aprendiz._id,
            nombre: aprendiz.nombre,
            email: aprendiz.email,
        })
        res.json({
            msg: 'Hemos enviado un enlace de acceso a su correo electrónico',
        })
    } catch (error) {
        console.log(error)
    }
}

export { obtenerAprendiz, autenticar }
