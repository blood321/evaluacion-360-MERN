import React, { useState } from 'react'
import usePreguntas from '../hooks/usePreguntas'
const PreguntaEditable = ({ id,pregunta2}) => {
    console.log(id)
    const [editando, setEditando] = useState(false)
    const [pregunta,setPregunta]=useState(pregunta2)
    console.log(pregunta)
    const {   submitPregunta,eliminarPregunta } = usePreguntas();


    const handleChange = e => {
        setPregunta(e.target.value)
    }

        // onGuardar(pregunta)
        // setEditando(false)   

        
        
        const handleEliminar = () => {
        eliminarPregunta(id)   
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEditando(false)
        if ([pregunta2].includes("")) {
            setMostrarAlerta({
            msg: "Todos los campos son necesarios ",
            error: true,
          });
          return;
        }
        // Pasar los datos hacia el provider
        await submitPregunta({ id,pregunta});
    
      };
    return (
        <form  
        onSubmit={handleSubmit}>

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
                    <p className="py-2">{pregunta2}</p>
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
        </form>

    )
}

export default PreguntaEditable
