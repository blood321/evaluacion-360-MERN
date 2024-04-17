import XlsPopulate from 'xlsx-populate';
import encuesta from '../models/encuesta.js'
import xlsx from 'xlsx'
import aprendiz from '../models/aprendiz.js';
import fichas from '../models/fichas.js';
const subirAprendices = async (req, res) => {
    try {
    const excel=xlsx.readFile(".//Libro1.xlsx");
    var nombreHoja=excel.SheetNames; //regresa un array }
    let datos =xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    for (let index = 0; index < datos.length; index++) {
        

      const datosGuardados=  await new aprendiz(datos[index]);
      datosGuardados.save();
    }
    res.json({
msg: "Aprendices guardados con exito ",
});
    
    // Utilizar la función para agrupar los nombres por ficha
   
    } catch (error) {
        console.error('Error al crear el archivo de Excel:', error);
        res.status(500).send('Error al crear el archivo de Excel.');
    }
};
const subirFichas =async (req,res)=>{
    try {
        const excel=xlsx.readFile(".//Libro1.xlsx");
        var nombreHoja=excel.SheetNames; //regresa un array }
        let datos =xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
        const aprendicesUnicos = [...new Set(datos.map(item => item.aprendices))];
        // Creamos el objeto final
        const objetoFinal = {
            numeroFicha: datos[0].numeroFicha,
            nombreDelPrograma: datos[0].nombreDelPrograma,
            aprendices: aprendicesUnicos
        };
       
        for (let index = 0; index < objetoFinal.aprendices.length; index++) {
            const element = objetoFinal.aprendices[index];
            const busca=await aprendiz.find({nombre:element})
            console.log(busca)

            // const guardar = new fichas({
            //     numeroFicha:datos[0].numeroFicha,
            //     nombreDelPrograma: datos[0].nombreDelPrograma,
            //     aprendices: busca
            // })
            // const queSeGuardo=guardar.save();
            // console.log(queSeGuardo)
    
        }
        
       
        } catch (error) {
            console.error('Error al crear el archivo de Excel:', error);
            res.status(500).send('Error al crear el archivo de Excel.');
        }
}
const subirProgramacion=async(req,res)=>{

}
const subirInstructores=async(req,res)=>{

}
export { subirAprendices,subirFichas,subirInstructores,subirProgramacion};
