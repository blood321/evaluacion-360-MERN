import React, { useState } from 'react'

const PreguntaEditable = ({ preguntaInicial, onGuardar, onEliminar }) => {
    const [pregunta, setPregunta] = useState(preguntaInicial)
    const [editando, setEditando] = useState(false)

    const handleChange = e => {
        setPregunta(e.target.value)
    }

    const handleSubmit = () => {
        onGuardar(pregunta)
        setEditando(false)
    }

    const handleEliminar = () => {
        onEliminar() // Llama a la función de eliminación
    }

    return (
        <div className="p-3 py-1 animate-fade-down animate-duration-[1000ms] ">
            {editando ? (
                <div className="flex items-center  ">
                    <input
                        className="border-1 border-gray-300 p-1 mr-2 rounded-md flex-1 w-full  text-[23px]"
                        type="text"
                        value={pregunta}
                        onChange={handleChange}
                    />
                    <button
                        className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded mr-2 text-[16px]"
                        onClick={handleSubmit}
                    >
                        Guardar
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-[16px]"
                        onClick={() => setEditando(false)}
                    >
                        Cancelar
                    </button>
                </div>
            ) : (
                <div className="flex flex-col">
                    <p className="py-2">{pregunta}</p>
                    <div className="flex">
                        <button
                            className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded mr-2 text-[16px]"
                            onClick={() => setEditando(true)}
                        >
                            Editar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-[16px]"
                            onClick={handleEliminar}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PreguntaEditable
