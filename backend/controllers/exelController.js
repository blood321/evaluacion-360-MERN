import XlsPopulate from 'xlsx-populate';
import encuesta from '../models/encuesta.js'

const nuevoExcel = async (req, res) => {
    try {
        const Encuestas = await encuesta.find({activa:true});
        const idPreguntas = encuesta.map(pregunta => pregunta.pregunta);

        console.log(idPreguntas)

    //    const workbook = await XlsPopulate.fromBlankAsync();
            
    //         workbook.sheet(0).cell("A1").value([  encuestas   ]   );
        
    //     await workbook.toFileAsync('./salida.xlsx');
        res.send('Archivo de Excel creado correctamente.');
    } catch (error) {
        console.error('Error al crear el archivo de Excel:', error);
        res.status(500).send('Error al crear el archivo de Excel.');
    }
};

export { nuevoExcel };
