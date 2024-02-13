import aprendiz from "../models/aprendiz.js"

import generarId from "../helpers/generarid.js";

import  {emailRegistro} from "../helpers/email.js";

const nuevoAprendiz =async(req,res)=>{

    const { email } = req.body;
    const existeUsuario = await aprendiz.findOne({ email })
    
    if (existeUsuario) {
        const error = new Error("Usuario ya Existe")
        return res.status(400).json({ msg: error.message })
    }
    
    try {
        const usuario = new aprendiz(req.body)
        usuario.token = generarId()
        await usuario.save()

        //enviar email de confirmacion
        emailRegistro({
            email: aprendiz.email,
            nombre: aprendiz.nombre,
            token: aprendiz.token
        })

        res.json({msg: 'Usuario creado correctamente, reviza tu email y confirma tu cuenta'})
    } catch (error) {
        console.log(error) 
    }



    
 
}
// const autenticar =async (req,res)=>{
//     const {nombre, Cedula}=req.body
// //comprobar si el usuario existe 
//     const usuario = await  aprendiz.findOne({nombre})
//     if (!usuario){
//         const error=new Error("El Usuario no Existe ")
//         return res.status(404).json({msg:error.message})
//     }
// //comprobar si el usuario esta confirmado 
// if (!usuario.confirmado){
//     const error=new Error("Tu cuenta no ha sido confirmada  ")
//     return res.status(403).json({msg:error.message})
// }
// //comprobar su password 
// if(await usuario.comprobarpasswor(Cedula)){
//   res.json({
//    _id:aprendiz._id,
//    nombre:aprendiz.nombre,
  
//    token:generarJWT(aprendiz._id),
//   })

// }else{
//     const error=new Error("esa no es ")
//     return res.status(403).json({msg:error.message})
// }


// };
const perfil =async (req,res) =>{
    
    const { usuario } = req 
    res.json(usuario)

};


export {nuevoAprendiz,perfil}