import React from 'react'

const CrearPreguntas = () => {
    // Aquí puedes implementar la lógica para crear preguntas
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Crear Preguntas</h2>
            {/* Aquí puedes agregar los elementos necesarios para crear preguntas */}
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta aquí"
                    className="border-2 border-gray-300 p-2 mr-2 rounded-md flex-1"
                />
                <button className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
                    Crear
                </button>
            </div>
        </div>
    )
}

export default CrearPreguntas
