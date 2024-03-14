import React, { useState } from 'react'
import Tematicas from '../components/Tematicas'
import ListarPreguntas from '../components/ListarPreguntas'
import FormularioProyecto from '../components/FormularioProyecto'
import Identificador from '../components/IdentificadorEncuesta'

const CrearEncuestasAprendices = () => {
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState(null)

    return (
        <div className="px-auto px-3">
            <div className="md:flex md:justify-between mt-2">
                <p className="px-3 pr-5 font-semibold text-[19px] text-Secundario_2/[0.7]">
                    Elige una temática para tu encuesta y las preguntas se adaptarán a ella. Puedes cambiar la temática
                    según lo necesites.{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                        ¡Selecciona sabiamente y haz que tus encuestas destaquen!
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
                <Tematicas onTematicaSeleccionada={setTematicaSeleccionada} />
                <div className=" px-auto pr-56 ">
                    <Identificador />
                </div>
            </div>
            <div className="md:flex md:justify-between md:items-start mt-4">
                {/* Componente ListarPreguntas */}
                <div className="w-full mt-4 mx-auto md:pl-2">
                    {tematicaSeleccionada && <ListarPreguntas tipo="aprendiz" />}
                </div>
                <div className="w-full py-auto">
                    {/* Componente FormularioProyecto */}
                    <FormularioProyecto />
                </div>
            </div>
        </div>
    )
}

export default CrearEncuestasAprendices
