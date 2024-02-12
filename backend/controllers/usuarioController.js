import Usuario from "../models/Usuario.js"
import generarId from "../helpers/generarid.js";
import generarJWT from "../helpers/generarJWT.js";
const registrar = async (req, res) =>{
    //evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne ({email: email})
    if (existeUsuario) {
        const error = new Error("Usuario ya existe")
        return res.status(400).json({ msg: error.message })
    }
    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId(); // Asigna el token a la instancia específica del usuario
        const usuarioAlmacenado = await usuario.save();
        res.json(
            usuarioAlmacenado);
    } catch (error){
        console.log(error)
    }
};
const autenticar = async (req, res) =>{
    const {email, password} = req.body
    //comprobar si el usuario existe
    const usuario = await Usuario.findOne({email})
    if (!usuario){
        const error = new Error("el usuario no existe")
        return res.status(404).json({msg: error.message})
    }

    //comprovar si el usuario esta confirmado
    if (!usuario.confirmado){
        const error = new Error('El usuario no ha sido confirmado')
        return res.status(403).json({msg: error.message})
    }

    //comprovar la contraseña
    if ( await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
    } else{
        const error = new Error('La contraseña es incorrecta')
        return res.status(403).json({msg: error.message})
    }

}
const confirmar = async (req, res) =>{
    const { token } = req.params
    const usuarioConfirmar = await Usuario.findOne({token})
    if (!usuarioConfirmar){
        const error = new Error('token no valido')
        return res.status(403).json({msg: error.message})
    }
    try{
        usuarioConfirmar.confirmado = true
        usuarioConfirmar.token = ""
        await usuarioConfirmar.save()
        res.json({msg:'Usuario confirmado correctamente'})
        console.log(usuarioConfirmar)
    } catch (error) {
        console.log(error)
    }

}
const olvidePassword = async (req, res) =>{
    const {email} = req.body
    const usuario = await Usuario.findOne({email})
        if (!usuario){
            const error = new Error("el usuario no existe")
            return res.status(404).json({msg: error.message})
    }
    try {
        usuario.token = generarId()
        await usuario.save()
        res.json({msg: 'se envio un email con las instrucciones correspondientes.'})
    } catch(error){
        console.log(error)
    }

}

const comprobarToken = async (req, res) =>{
    const {token} = req.params
    const tokenValido = await Usuario.findOne({ token })
    if (tokenValido) {
        res.json ({msg: "token y usuario validos."});
    } else {
        const error = new Error('Token no valido')
        return res.status(403).json({msg: error.message})
    }
}
const nuevoPassword = async (req, res) =>{
    const { token } = req.params
    const { password } = req.body

    const usuario = await Usuario.findOne({ token })

    if (usuario) {
        usuario.password = password
        usuario.token= ''
        try{
            await usuario.save()
        res.json({ msg:'contraseña actualizada'})
        }catch(error){
            console.log(error)
        }
        
    } else {
        const error = new Error('Token no valido')
            return res.status(404).json({msg: error.message})
    }
}
const perfil = async (req, res) =>{
    const { usuario } = req 
    res.json(usuario)
}
export { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil, };