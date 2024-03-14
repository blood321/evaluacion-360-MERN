import GraficaColum from '../components/GraficaColum'
import GraficaPie from '../components/GraficaPie'

const Resultados = () => {
    return (
      <>
      <div className='flex items-center '>
      <GraficaColum></GraficaColum>
      </div>
      <div className='flex items-center justify-center'>
      <GraficaPie></GraficaPie>
      </div>
      </>
    );
  };
  
  export default Resultados;
  