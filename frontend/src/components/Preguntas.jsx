import React, { useState } from 'react';
import useRespuestas from '../hooks/useRespuestas';

const Preguntas = () => {
    const { respuestas } = useRespuestas();

    const [indice, setIndice] = useState(0); // Estado para el índice de la pregunta actual
    // Mapea las respuestas para obtener un array de objetos { pregunta, _id }
    const preguntasConID = respuestas.map(respuesta => ({ pregunta: respuesta.pregunta.pregunta, _id: respuesta.pregunta._id }));

    // Filtra y mapea solo las preguntas únicas
    const preguntasUnicas = [...new Set(preguntasConID.map(pregunta => pregunta.pregunta))];

    // Función para obtener el ID de la pregunta actual
    const obtenerIDPreguntaActual = () => {
        const preguntaActual = preguntasConID.find(pregunta => pregunta.pregunta === preguntasUnicas[indice]);
        return preguntaActual ? preguntaActual._id : null;
    };

    const cambiarPalabra = (direccion) => {
        if (direccion === 'adelante') {
            // Incrementar el índice si no se ha alcanzado el límite máximo
            if (indice < preguntasUnicas.length - 1) {
                setIndice(prevIndice => prevIndice + 1);        
            }
        } else {
            // Decrementar el índice si no se ha alcanzado el límite mínimo
            if (indice > 0) {
                setIndice(prevIndice => prevIndice - 1);
            }
        }
    };

    return (
        <div className="container mx-auto mt-5 md:mt-2 p-2 px-2 md:flex md:flex-col md:items-center">
            <p className="text-[16px] justify-center text-center">{preguntasUnicas[indice]}</p>
            <div className="mt-2 flex justify-center items-center">
                <button
                    onClick={() => cambiarPalabra('atras')} // Llama a cambiarPalabra con 'atras'
                    className="bg-Principal_2 rounded-lg p-2 text-sm  items-center justify-center text-white"
                >
                    &larr; Pregunta Anterior
                </button>
                <button
                    onClick={() => cambiarPalabra('adelante')} // Llama a cambiarPalabra con 'adelante'
                    className="bg-Principal_1 rounded-lg  p-2 text-sm   text-white"
                >
                    Siguiente Pregunta &rarr;
                </button>
            </div>
            <p>ID de la pregunta actual: {obtenerIDPreguntaActual()}</p> {/* Muestra el ID de la pregunta actual */}
        </div>
    )
}

export default Preguntas;
