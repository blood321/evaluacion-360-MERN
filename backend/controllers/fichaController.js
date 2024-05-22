import fichas from "../models/fichas.js"

const nuevaFicha =async (req,res)=>{ 
    

    const ficha =new fichas(req.body)
  
    try {
        const ficahaGuardada= await ficha.save()

        res.json(ficahaGuardada)
        
    } catch (error) {
        console.log(error)
    }
   
   
    
}


export {nuevaFicha}