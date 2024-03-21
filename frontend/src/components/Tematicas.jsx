import React, { useState } from 'react'

const Tematicas = ({ onTematicaSeleccionada }) => {
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState('')

    const handleSeleccionarTematica = tematica => {
        setTematicaSeleccionada(tematica)
        onTematicaSeleccionada(tematica) // Llama a la función onTematicaSeleccionada con la temática seleccionada
    }

    return (
        <div className="flex flex-col px-4">
            <p className="font-extrabold text-[30px] text-Principal_2/[0.9]">Selecciona la temática</p>
            <div className="flex items-center justify-between gap-[10px] py-2">
                <select
                    className="bg-Principal_3 w-[300px] p-2 text-Principal_1 capitalize font-semibold block mt-1 text-center rounded-lg border border-Secundario_2 hover:text-Principal_1"
                    value={tematicaSeleccionada}
                    onChange={e => handleSeleccionarTematica(e.target.value)}
                >
                    <option value="" disabled>
                        Temáticas
                    </option>
                    <option value="pedagogica">Pedagógica</option>
                    <option value="tecnica">Técnica</option>
                    <option value="blandas">H-Blandas</option>
                    <option value="profesional">Profesiona7l</option>
                </select>
            </div>
        </div>
    )
}

export default Tematicas
