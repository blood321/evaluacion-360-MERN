import XlsPopulate from 'xlsx-populate';
import Workbook from 'xlsx-populate/lib/Workbook';

const nuevoExcel =async (req,res)=>{ 


    XlsPopulate.fromBlankAsync()
    .then(Workbook=>{
        Workbook.sheet(0).cell('A1').value('Hello word')
        return Workbook.toFileAsync("./salida.xlsx")
    })}

    export {nuevoExcel}