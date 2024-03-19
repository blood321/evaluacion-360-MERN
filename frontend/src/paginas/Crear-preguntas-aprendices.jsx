import Tematicas from '../components/Tematicas'
import CrearPreguntas from '../components/CrearPreguntas'
import React from 'react'
import PreguntaEditable from '../components/EditarPreguntas' // Importa el componente PreguntaEditable

const CrearPreguntasAprendices = () => {
    return (
        <div className="px-auto px-3">
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 pr-8">
                        Aprendices
                    </span>
                </h2>
            </div>
            {/* Componente Tematicas */}
            <div className="md:flex md:justify-between md:items-start mt-9">
                <Tematicas />
            </div>
            {/* Componente CrearPreguntas */}
            <div className="px-7">
                <CrearPreguntas />
            </div>
            {/* Ejemplo de uso del componente PreguntaEditable */}
            <div>
                <PreguntaEditable
                    preguntaInicial="¿Cuál es tu color favorito?"
                    onGuardar={nuevaPregunta => console.log('Pregunta guardada:', nuevaPregunta)}
                />
            </div>
        </div>
    )
}

export default CrearPreguntasAprendices
