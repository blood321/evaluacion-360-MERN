import React, { useState } from 'react'
import Tematicas from '../components/Tematicas'
import CrearPreguntas from '../components/CrearPreguntas'
import PreguntaEditable from '../components/EditarPreguntas' // Corregido el import
import usePreguntas from '../hooks/usePreguntas'

const CrearPreguntasAprendices = () => {
    const {preguntas }=usePreguntas()
    console.log(preguntas+"hiaihihihi")
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState(null)
 console.log(tematicaSeleccionada)
    const handleTematicaSeleccionada = tematica => {
        setTematicaSeleccionada(tematica)
    }
   
 
       const preguntasFiltradas = preguntas.filter((pregunta) => {
         // Verificar si la pregunta tiene la temática seleccionada
        const tieneTematica = pregunta.tematica === tematicaSeleccionada;
        // Verificar si la página actual es "/inicio-admin/Crear-encuestas-aprendices"
        const esPaginaAprendices =  location.pathname === "/inicio-admin/Crear-preguntas-aprendices";
        const esPaginacompañeros =location.pathname==="/inicio-admin/Crear-encuestas-companeros"
        const espaginaJefes =location.pathname==="/inicio-admin/Crear-encuestas-jefes"
        // Filtrar las preguntas que cumplan con ambos criterios
      return(
        
          tieneTematica &&
     
          (esPaginaAprendices ? pregunta.encuestado === "Aprendiz" : null)
          ||
          tieneTematica&&
          (esPaginacompañeros ? pregunta.encuestado=== "Compañeros": null)
          ||
          tieneTematica&&
          (espaginaJefes ? pregunta.encuestado === "Jefes":null)
      )
      });
    
console.log(preguntasFiltradas)

    return (
        <div className="px-auto px-3 ">
            <div className="md:flex md:justify-between mt-2">
                <p className="px-3 pr-5 font-semibold text-[19px] text-Secundario_2/[0.8]">
                    <span className="font-bold">
                        Asigna preguntas a una temática específica dentro del módulo en el que te encuentras.
                    </span>
                    Estas preguntas están diseñadas exclusivamente para la creación de encuestas relacionadas con ese
                    módulo en particular y la temática que desees abordar.{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 font-bold ">
                        Podrás acceder a estas preguntas asignadas siempre que las necesites dentro del mismo módulo
                    </span>
                </p>
                <h2 className="text-4xl font-black text-center mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 pr-8 animate-fade-right animate-duration-[1700ms]">
                        Aprendices
                    </span>
                </h2>
            </div>
            <div className="px-auto ">
                <div className="md:flex md:justify-between md:items-start mt-7">
                    {/* Tematicas a la izquierda */}
                    <div className="mr-4">
                        <Tematicas tematica={handleTematicaSeleccionada} />
                    </div>
                    {/* Componente CrearPreguntas */}
                    <div className="animate-fade-down animate-duration-[700ms]">
                        <CrearPreguntas tematica={tematicaSeleccionada} />
                    </div>
                </div>

                {/* Lista de preguntas */}
                <div className="rounded-md  h-[270px] overflow-y-auto mt-4 w-full md:w-570 bg-gray-200/[0.9] font-semibold text-[20px] animate-fade-down animate-duration-[1000ms]">
                    {preguntasFiltradas.length > 0 ? (
                        preguntasFiltradas.map((pregunta) => (
                            <PreguntaEditable
                            key={pregunta._id}
                                pregunta2={pregunta.pregunta}
                                id={pregunta._id}
                            />
                        ))
                    ) : (
                        <p className=" text-1xl font-black text-center mt-6 bg-clip-text text-transparent bg-gradient-to-l from-Secundario_1 to-Secundario_2 p-9  ">
                            No hay preguntas creadas aún. Seleccione una temática o cree una pregunta.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CrearPreguntasAprendices
