
import Proyecto from "../models/Proyecto.js"

 


const obtenerProyectos =async (req,res)=>{ 
    const proyectos =await Proyecto.find().where('creador').equals(req.Usuario)
    res.json(proyectos)
}
const nuevoProyecto =async (req,res)=>{ 

    const proyecto = new Proyecto(req.body)
    proyecto.creador = req.Usuario._id
    try {
        const proyectoAlmacenado=await proyecto.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }
   
   
    
}
const editarProyecto =async (req,res)=>{ 
    const { id }=req.params
    const proyecto=await Proyecto.findById(id)
    console.log(proyecto)
    if (!proyecto){
        const error =new Error("No encontrado")

        return res.status(404).json({msg:error.message})
    }
    if (proyecto.creador.toString() !== req.Usuario._id.toString()) {
        const error =new Error("No tiene los permisos")
        return res.status(401).json({msg:error.message})

    }
    proyecto.nombre=req.body.nombre || proyecto.nombre
    proyecto.descripcion=req.body.descripcion || proyecto.descripcion
    proyecto.fechaEntrega=req.body.fechaEntrega || proyecto.fechaEntrega
    proyecto.cliente=req.body.cliente || proyecto.cliente

    try {
        const proyectoAlmacenado=await proyecto.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}
const eliminarProyecto =async (req,res)=>{ 
    const { id }=req.params
    const proyecto=await Proyecto.findById(id)
    console.log(proyecto)
    if (!proyecto){
        const error =new Error("No encontrado")

        return res.status(404).json({msg:error.message})
    }
    if (proyecto.creador.toString() !== req.Usuario._id.toString()) {
        const error =new Error("No tiene los permisos")
        return res.status(401).json({msg:error.message})

    }
    try {
       await proyecto.deleteOne()
       res.json({msg:"Proyecto Eliminiado"}) 
    } catch (error) {
        console.log(error)
    }
}
const agregarProyecto =async (req,res)=>{ 

}
const obtenerProyecto =async (req,res)=>{ 
    const { id }=req.params
    const proyecto=await Proyecto.findById(id)
    console.log(proyecto)
    if (!proyecto){
        const error =new Error("No encontrado")

        return res.status(404).json({msg:error.message})
    }
    if (proyecto.creador.toString() !== req.Usuario._id.toString()) {
        const error =new Error("No tiene los permisos")
        return res.status(401).json({msg:error.message})
    }res.json(proyecto)
}
const agregarColaboradores =async (req,res)=>{

}
const eliminarCoaborador =async (req,res)=>{  

} 
const obtenerTareas =async (req,res)=>{

}

export {
    obtenerProyecto,
    nuevoProyecto,
    obtenerProyectos,
    eliminarCoaborador,
    eliminarProyecto,
    agregarColaboradores,
    editarProyecto,
    agregarProyecto,
    obtenerTareas

}