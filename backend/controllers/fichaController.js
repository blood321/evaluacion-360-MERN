import fichas from "../models/fichas.js"

const nuevaFicha =async (req,res)=>{ 
    

    const ficha =new fichas(req.body)
  
    try {
        const proyectoAlmacenado= await ficha.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }
   
   
    
}
// const preguntasCreadas =async (req,res)=>{
//     const preguntasC =await preguntas.find().where('creador').equeals(req.Usuario)
//     res.json(preguntasC)
// }


export {nuevaFicha}