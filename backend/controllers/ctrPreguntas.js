import preguntas from "../models/preguntas.js"
import tematicas from"../models/tematica.js"
import tipoPreguntas from"../models/tipoPregunta.js"

/* const nuevaPregunta =async (req,res)=>{ 
    

    const pregunta =new preguntas(req.body)
  
    try {
        const proyectoAlmacenado= await pregunta.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }
   
   
    
}
const preguntasCreadas =async (req,res)=>{
    const preguntasC =await preguntas.find({ficha:{ficha:"65c5005cbc88b75982a376c1"}})
    res.json(preguntasC)
}
 */
const nuevaPregunta = async (req, res) => {
    const { pregunta, tipoPreguntaId, tematicaId } = req.body;

    try {
        // Busca el tipo de pregunta por su ID
        const tipoPregunta = await tipoPreguntas.findById(tipoPreguntaId);

        // Busca la temática por su ID
        const tematica = await tematicas.findById(tematicaId);

        // Verifica si tanto el tipo de pregunta como la temática existen
        if (!tipoPregunta || !tematica) {
            return res.status(400).json({ mensaje: 'Tipo de pregunta o temática no encontrados' });
        }

        // Crea la nueva pregunta con los datos proporcionados
        const nuevaPregunta = new preguntas({
            pregunta,
            tipoPregunta: [tipoPregunta._id], // Añade el ID del tipo de pregunta
            tematica: [tematica._id] // Añade el ID de la temática
        });

        // Guarda la pregunta en la base de datos
        const preguntaGuardada = await nuevaPregunta.save();

        res.status(201).json(preguntaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la pregunta' });
    }
};



export {nuevaPregunta}