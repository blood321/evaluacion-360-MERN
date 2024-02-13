import ficha from "../models/fichas.js"

const nuevaFicha =async (req,res)=>{ 
    

    const fichas =new ficha(req.body)
  
    try {
        const proyectoAlmacenado= await fichas.save()

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