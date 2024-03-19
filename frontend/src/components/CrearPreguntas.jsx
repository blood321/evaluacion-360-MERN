import React, { useState } from 'react'

const CrearPreguntas = ({ agregarPregunta }) => {
    const [nuevaPregunta, setNuevaPregunta] = useState('')
    const [mostrarAlerta, setMostrarAlerta] = useState(false)

    const handleCrearPregunta = () => {
        if (nuevaPregunta.trim() === '') {
            setMostrarAlerta(true)
        } else {
            agregarPregunta(nuevaPregunta)
            setNuevaPregunta('')
            setMostrarAlerta(false)
        }
    }

    return (
        <div className="px-auto">
            <h2 className="font-extrabold text-[30px] text-Principal_2/[0.9] mb-3">Crear Preguntas</h2>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta aquí"
                    className="border-2 border-gray-300 p-2 mr-2 rounded-md w-[500px]"
                    value={nuevaPregunta}
                    onChange={e => setNuevaPregunta(e.target.value)}
                />
                <button
                    className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCrearPregunta}
                >
                    Crear
                </button>
            </div>
            {mostrarAlerta && (
                <p className="text-red-500 mt-2 font-extrabold">Por favor, escribe una pregunta antes de crearla.</p>
            )}
        </div>
    )
}

export default CrearPreguntas
