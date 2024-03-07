import { useState } from 'react';
import useAuth from "../hooks/useAuth";

const Listarp = () => {
  const { auth } = useAuth();
  
  // Estado para controlar la selección de los botones
  const [seleccionados, setSeleccionados] = useState(false);
  
  // Función para manejar el clic en "Seleccionar Todo"
  const handleSeleccionarTodo = () => {
    setSeleccionados(prevState => !prevState); // Invierte el estado de selección
  };
  
  return (
    <aside
      className="
        flex 
        flex-col 
        p-2
        h-max  
        w-full sm:w-[670px] 
        bg-gray-200 
        border-Secundario_1 
        border-solid 
        border-[7.442px] 
        rounded-[30.695px] 
        relative
        
      "
    >
      <div className="font-Roboto w-full mt-1 relative">
        <div className="flex flex-col">
          <div className="flex items-center ">
            <button
              type="button"
              className={`rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:bg-Principal_1 ${seleccionados ? 'bg-Principal_1' : 'bg-gray-300'} hover:bg-Principal_1`}
            ></button>
            <span className="mr-4">
              ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO
            </span>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className={`rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:bg-Principal_1 ${seleccionados ? 'bg-Principal_1' : 'bg-gray-300'} hover:bg-Principal_1`}
            ></button>
            <span className="">
              ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO
            </span>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className={`rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:bg-Principal_1 ${seleccionados ? 'bg-Principal_1' : 'bg-gray-300'} hover:bg-Principal_1`}
            ></button>
            <span className="">
              ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO
            </span>
          </div>
        </div>
      </div>
      <button className="flex mb-2 mt-3" type="button" onClick={handleSeleccionarTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="font-Roboto">Seleccionar Todo</span>
      </button>
    </aside>
  );
};

export default Listarp;
