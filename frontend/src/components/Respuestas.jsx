import React, { useState } from 'react';
import Instructor from '../assets/img/instructor1.jpg';
import useRespuestas from '../hooks/useRespuestas';

const Respuestas = () => {
    const { respuestas } = useRespuestas();
    const [seleccion, setSeleccion] = useState({});

    const caja = respuestas.map(respuesta => ({ instructor: respuesta.instructor.nombre, id: respuesta.instructor._id }));

    const uniqueNames = {};
    
    caja.forEach(item => {
        uniqueNames[item.instructor] = item.id;
        if (!seleccion[item.id]) {
            setSeleccion(prevSeleccion => ({
                ...prevSeleccion,
                [item.id]: "No sé"
            }));
        }
    });
console.log(seleccion)
    const handleInputChange = (id, value) => {
        setSeleccion(prevSeleccion => ({
            ...prevSeleccion,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        // Aquí puedes enviar los valores seleccionados a donde los necesites
        console.log("Valores seleccionados:", seleccion);
    };

    return (
        <div>
            {Object.entries(uniqueNames).map(([nombre, id]) => (
                <div key={id} className="flex md:flex-row p-3">
                    <div className="mb-1 mt-4 flex items-center p-2 md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                        <img
                            src={Instructor}
                            alt="Instructor 1"
                            className="instructor__photo max-w-[70px] h-[70px] rounded-full"
                        />
                        <h2 className="font-bold text-lg ml-4">{nombre}</h2>
                        <div className="flex flex-col ml-2 text-[15px]">
                            {/* Puedes agregar más contenido aquí si es necesario */}
                            <label>
                                <input
                                    type="radio"
                                    name={id}
                                    value="No sé"
                                    checked={seleccion[id] === "No sé"}
                                    onChange={() => handleInputChange(id, "No sé")}
                                />
                                No sé
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name={id}
                                    value="Tal vez"
                                    checked={seleccion[id] === "Tal vez"}
                                    onChange={() => handleInputChange(id, "Tal vez")}
                                />
                                Tal vez
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name={id}
                                    value="Si"
                                    checked={seleccion[id] === "Si"}
                                    onChange={() => handleInputChange(id, "Si")}
                                />
                                Si
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name={id}
                                    value="No"
                                    checked={seleccion[id] === "No"}
                                    onChange={() => handleInputChange(id, "No")}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default Respuestas;
