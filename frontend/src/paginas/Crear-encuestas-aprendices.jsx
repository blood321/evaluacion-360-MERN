
import { useState } from 'react';
import useAuth from "../hooks/useAuth";
import usePreguntas from "../hooks/usePreguntas";

import Listarp from "../components/preguntasEncuestas";
const CrearEncuestasAprendices = () => {
  const { auth } = useAuth();
  
  // Estado para controlar la selección de los botones
  const {preguntas}=usePreguntas();

 
    return (
      <>
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
      "
    >
      <div className="font-Roboto w-full mt-1 ">
      {preguntas.length ? 
          preguntas.map(proyecto => (
            <Listarp key={proyecto._id} proyecto={proyecto}/>
            ))
         : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>)}
      </div>
      <button className="flex mb-2 mt-3" type="button" >
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
      </>
    );
  };
  
  export default CrearEncuestasAprendices;
  