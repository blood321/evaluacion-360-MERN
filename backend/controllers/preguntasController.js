import preguntas from "../models/preguntas.js"
import tematicas from"../models/tematica.js"





const nuevaPregunta = async (req, res) => {
    
    const nuevaPregunta =new preguntas(req.body)
  
    try {
        const preguntaAlmacenada= await nuevaPregunta.save()

        res.json(preguntaAlmacenada)
        
    } catch (error) {
        console.log(error)
    }
   
};
const editarPregunta =async (req,res)=>{
    const { id } = req.params
    console.log(id)
    const preguntaEdit = await preguntas.findById(id)
    console.log(preguntaEdit)
    if (!preguntaEdit) {
        const error = new Error("no encontrado")
        return res.status(404).json({ msg: error.message})
    }
    preguntaEdit.pregunta = req.body.pregunta || preguntaEdit.pregunta
    console.log(req.body.pregunta)
    try {
        const proyectoAlmacenado = await preguntaEdit.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}
const eliminarPregunta =async(req,res)=>{
    const { id }=req.params
    const preguntaDelete=await preguntas.findById(id)
    console.log(preguntaDelete)
    if (!preguntaDelete){
        const error =new Error("No encontrado")

        return res.status(404).json({msg:error.message})
    }
 
    try {
       await preguntaDelete.deleteOne()
       res.json({msg:"pregunta  Eliminada"}) 
    } catch (error) {
        console.log(error)
    }
}

const obtenerPreguntasParaAprendiz =async (req,res)=>{
 const preguntasObtenidas=await preguntas.find();
 res.json(preguntasObtenidas)
}
const obtenerPreguntasParaJefes =async (req,res)=>{
    const preguntasObtenidas=await preguntas.find({encuestado:"Jefes"});
    res.json(preguntasObtenidas)
}
const obtenerPreguntasParaCompañeros  =async (req,res)=>{
    const preguntasObtenidas=await preguntas.find({encuestado:"Compañeros"});
    res.json(preguntasObtenidas)
}

const obtenerPreguntas =async (req,res)=>{
    const preguntasObtenidas=await preguntas.find();
    res.json(preguntasObtenidas)
}

export {obtenerPreguntasParaCompañeros,nuevaPregunta,editarPregunta,eliminarPregunta,obtenerPreguntas,obtenerPreguntasParaAprendiz,obtenerPreguntasParaJefes}