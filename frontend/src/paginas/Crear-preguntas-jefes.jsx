import React, { useState } from 'react'
import Tematicas from '../components/Tematicas'
import CrearPreguntas from '../components/CrearPreguntas'
import PreguntaEditable from '../components/EditarPreguntas' // Corregido el import
const CrearPreguntasJefes = () => {
    const [preguntas, setPreguntas] = useState([])

    // Función para agregar una nueva pregunta
    const agregarPregunta = nuevaPregunta => {
        setPreguntas([...preguntas, nuevaPregunta])
    }

    // Función para editar una pregunta
    const editarPregunta = (index, preguntaEditada) => {
        const nuevasPreguntas = [...preguntas]
        nuevasPreguntas[index] = preguntaEditada
        setPreguntas(nuevasPreguntas)
    }

    // Función para eliminar una pregunta
    const eliminarPregunta = index => {
        const nuevasPreguntas = preguntas.filter((_, i) => i !== index)
        setPreguntas(nuevasPreguntas)
    }
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
                        Jefes
                    </span>
                </h2>
            </div>
            <div className="px-auto ">
                <div className="md:flex md:justify-between md:items-start mt-7">
                    {/* Tematicas a la izquierda */}
                    <div className="mr-4">
                        <Tematicas />
                    </div>
                    {/* Componente CrearPreguntas */}
                    <div className="animate-fade-down animate-duration-[700ms]">
                        <CrearPreguntas agregarPregunta={agregarPregunta} />
                    </div>
                </div>

                {/* Lista de preguntas */}
                <div className="h-[300px] overflow-y-auto mt-6  w-full md:w-570 bg-gray-200/[0.9] font-semibold text-[20px] animate-fade-down animate-duration-[1000ms]">
                    {preguntas.length > 0 ? (
                        preguntas.map((pregunta, index) => (
                            <PreguntaEditable
                                key={index}
                                preguntaInicial={pregunta}
                                onGuardar={preguntaEditada => editarPregunta(index, preguntaEditada)}
                                onEliminar={() => eliminarPregunta(index)}
                            />
                        ))
                    ) : (
                        <p className=" text-2xl font-black text-center mt-6 bg-clip-text text-transparent bg-gradient-to-l from-Secundario_1 to-Secundario_2 p-9  ">
                            No hay preguntas creadas aún. Seleccione una temática o cree una pregunta.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CrearPreguntasJefes
