import XlsPopulate from 'xlsx-populate';
import preguntas from '../models/preguntas.js';
import encuestas from '../models/encuesta.js'

const nuevoExcel = async (req, res) => {
    const Encuestas = await encuestas.find({}, 'preguntas').populate('preguntas');

    
    console.log(Encuestas)
    try {

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
