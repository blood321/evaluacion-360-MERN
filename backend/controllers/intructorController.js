import instructor from "../models/instructor.js"
import generarId from "../helpers/generarid.js";
import generarJWT from "../helpers/generarJWT.js";
import { error } from "console";

const registrarI = async (req,res)=>{
    //evitar registros duplicados 
    const ficha =new instructor(req.body)
  
    try {
        const proyectoAlmacenado= await ficha.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }

};
const autenticarI =async (req,res)=>{
    const {email, password}=req.body
//comprobar si el usuario existe 
    const usuario = await  Usuario.findOne({email})
    if (!usuario){
        const error=new Error("El Usuario no Existe ")
        return res.status(404).json({msg:error.message})
    }
//comprobar si el usuario esta confirmado 
if (!usuario.confirmado){
    const error=new Error("Tu cuenta no ha sido confirmada  ")
    return res.status(403).json({msg:error.message})
}
//comprobar su password 
if(await usuario.comprobarPassword(password)){
  res.json({
   _id:usuario._id,
   nombre:usuario.nombre,
   email:usuario.email,
   token:generarJWT(usuario._id),
  })

}else{
    const error=new Error("esa no es ")
    return res.status(403).json({msg:error.message})
}


};
const confirmarI = async (req,res) =>{
 
 const { token } = req.params
 const usuarioConfirmar = await Usuario.findOne({token})
 if (!usuarioConfirmar){
    const error =new Error ("Token no valido ")

    return res.status(403).json({msg: error.message})
 }
 try {
    usuarioConfirmar.confirmado=true
    usuarioConfirmar.token=""
    await usuarioConfirmar.save()
    res.json({msg:'usuario confirmado correctamente'})

     console.log (usuarioConfirmar)
    
 } catch (error) {
    console.log(error)
    
 }

};
const olvidePasswordI =async (req, res) =>{
 
    const {email}= req.body
    const usuario =await Usuario.findOne({email})
    if (!usuario){
        const error =new Error ("el usuario no existe")
        return res.status(404).json({ms:error.message})
    }
    try {
        usuario.token =generarId()
        await usuario.save()
        res.json({msg:'ya podes cambiar la contra '})
    } catch (error) {
        console.log(error)
    }
};
const comprobarToken =async (req,res)=>{
 const {token} =req.params
 const tokenValido = await Usuario.findOne({token})
 if (tokenValido){
    res.json({
        msg:"token valido y el usuario existe "
    })
 }else{
    const error = new Error ("Token no valido ")
        return res.status(404).json({msg:error.message})
 }
};
const nuevoPassword =async (req,res)=>{
     const {token} = req.params
    const {password}=req.body
    const usuario = await Usuario.findOne({token})
    if(usuario){
        usuario.password=password
        usuario.token=''
        try {
            await usuario.save()
        res.json({msg:"ya se cambio su contraseña"})
            
        } catch (error) {
            console.log(error)
        }
        

    }else{
        const erro =new Error("Token no valido ")
        return res.status(404).json({msg:error.message})
    }
    console.log(token)
    console.log(password)

};
const perfil =async (req,res) =>{
    console.log("desde perfil")

};


export {registrarI};