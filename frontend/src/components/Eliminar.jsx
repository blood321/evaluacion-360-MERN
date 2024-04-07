import React from 'react';
import { useParams } from "react-router-dom";
import useEncuesta from "../hooks/useEncuesta"


function Eliminar({onClose,kuko} ) {
const{eliminarEncuesta}=useEncuesta()
const confirmar = () => {
 
  
  eliminarEncuesta(kuko)
}
// F
   return (
    <div>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-89 max-w-lg p-2 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              
              <h2 className="text-xl font-bold py-4">¡AVISO!</h2>
              <p className="text-sm text-gray-500 px-8">¿Estas Seguro Que Deseas Eliminar Esta Encuesta?{kuko}</p>
            </div>
            <div className="p-3 mt-2 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-300" onClick={onClose}>Cancelar</button>
              {/* Aquí agregamos un manejador de eventos para cerrar el modal cuando el usuario hace clic en "Cancelar" */}
              <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" onClick={confirmar}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eliminar;
