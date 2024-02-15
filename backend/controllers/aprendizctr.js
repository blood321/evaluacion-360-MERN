import aprendiz from "../models/aprendiz.js"
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarid.js";



const nuevoAprendiz =async(req,res)=>{

     //evitar registros duplicados 
     const {email}=req.body;
     const existeUsuario= await aprendiz.findOne({email})
     console.log(existeUsuario)
     if (existeUsuario){
         const error =new Error("Usuario ya existe");
         return res.status(400).json({msg: error.message})
     }
     try {
         const usuario = new aprendiz(req.body);
         usuario.token=generarId();
         const usuarioAlmacenado= await usuario.save();
         console.log(usuario)
         res.json({msg:"Usuario almacenado"})
     } catch (error) {
         console.log(error)
     }


    
 
}

const autenticarAprendiz = async (req,res)=>{
    const {email,}=req.body
    //comprobar si el usuario existe 
        const usuario = await  aprendiz.findOne({email})
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
    if(await usuario.comprobarPassword(email)){
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
    
}
const confirmar =async(req,res)=>{
    const { token } = req.params
 const usuarioConfirmar = await aprendiz.findOne({token})
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

}
const perfil =async (req,res) =>{
    
    const { usuario } = req 
    res.json(usuario)

};


export {nuevoAprendiz,perfil,autenticarAprendiz,confirmar}