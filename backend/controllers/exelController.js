import XlsPopulate from 'xlsx-populate';
import preguntas from '../models/preguntas.js';

const nuevoExcel = async (req, res) => {
    const encuestas = await preguntas.find({},'pregunta -_id')
    console.log(encuestas)
    try {
let celdadas=0

Object.entries(encuestas).forEach(async([key, value]) => {
const workbook = await XlsPopulate.fromBlankAsync();
            
            workbook.sheet(0).cell("A3").value(value.pregunta);
            console.log(value.pregunta)
        });
        await workbook.toFileAsync('./salida.xlsx');
        res.send('Archivo de Excel creado correctamente.');
    } catch (error) {
        console.error('Error al crear el archivo de Excel:', error);
        res.status(500).send('Error al crear el archivo de Excel.');
    }
};

export { nuevoExcel };
