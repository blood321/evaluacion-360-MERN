import React, { useState } from 'react'
import Tematicas from '../components/Tematicas'
import ListarPreguntas from '../components/ListarPreguntas'
import FormularioProyecto from '../components/FormularioProyecto'
import Identificador from '../components/IdentificadorEncuesta'
import ModalConfirmar from '../components/ModalConfirmacion' // Importa el modal aquí
const CrearEncuestasCompaneros = () => {
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState(null)
    const [mostrarModal, setMostrarModal] = useState(false) // Estado para controlar la visibilidad del modal

    const handleCrearEncuestas = () => {
        setMostrarModal(true) // Mostrar el modal al crear encuestas
    }
    return (
        <div className="px-auto px-3">
            <div className="md:flex md:justify-between mt-2">
                <p className="px-3 pr-2  font-semibold text-[19px] text-Secundario_2/[0.8]">
                    Elige una temática para tu encuesta y las preguntas se adaptarán a ella. Puedes cambiar la temática
                    según lo necesites.{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                        ¡Selecciona sabiamente y haz que tus encuestas destaquen!
                    </span>
                </p>
                <h2 className="text-4xl  font-black text-center mt-[10px]">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 pr-6 animate-fade-right animate-duration-[1700ms]">
                        Compañeros
                    </span>
                </h2>
            </div>
            {/* Componente Tematicas */}
            <div className="md:flex md:justify-between md:items-start mt-7">
                <Tematicas onTematicaSeleccionada={setTematicaSeleccionada} />
                <div className=" px-auto pr-60 ">
                    <Identificador />
                </div>
            </div>
            <div className="md:flex md:justify-between md:items-start mt-4">
                {/* Componente ListarPreguntas */}
                <div className="w-full mt-4 mx-auto md:pl-2">
                    {tematicaSeleccionada && <ListarPreguntas tipo="aprendiz" />}
                </div>
                <div className="w-full py-auto animate-fade-down animate-duration-[1000ms]">
                    {/* Componente FormularioProyecto */}
                    <FormularioProyecto onCrearEncuestas={handleCrearEncuestas} />
                </div>
            </div>
            {/* Modal Confirmar */}
            {mostrarModal && <ModalConfirmar onClose={() => setMostrarModal(false)} />}
        </div>
    )
}

export default CrearEncuestasCompaneros
