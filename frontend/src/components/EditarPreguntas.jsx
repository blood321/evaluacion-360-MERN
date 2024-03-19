import React, { useState } from 'react'

const PreguntaEditable = ({ preguntaInicial, onGuardar }) => {
    const [pregunta, setPregunta] = useState(preguntaInicial)
    const [editando, setEditando] = useState(false)

    const handleChange = e => {
        setPregunta(e.target.value)
    }

    const handleSubmit = () => {
        onGuardar(pregunta)
        setEditando(false)
    }

    return (
        <div>
            {editando ? (
                <div>
                    <input type="text" value={pregunta} onChange={handleChange} />
                    <button onClick={handleSubmit}>Guardar</button>
                </div>
            ) : (
                <div>
                    <p>{pregunta}</p>
                    <button onClick={() => setEditando(true)}>Editar</button>
                </div>
            )}
        </div>
    )
}

export default PreguntaEditable
