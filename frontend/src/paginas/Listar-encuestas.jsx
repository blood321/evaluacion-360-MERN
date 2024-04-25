import React, { useState } from 'react';
import PrevisualizarEncu from '../components/PrevisualizarEncu';
import Eliminar from '../components/Eliminar'; // Importa el componente Eliminar
import Enviar from '../components/Enviar'; // Importa el componente Enviar
import Editar from '../components/EditarEncuesta'; // Importa el componente Editar
import Actividad from '../components/Actividad';

const ListarEncuestas = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showEnviarModal, setShowEnviarModal] = useState(false);
    const [showActividadModal, setShowActividadModal] = useState(false);
    const [id, setId] = useState();

    // Función para mostrar el modal de eliminación
    const handleShowDeleteModal = (mensaje) => {
        setShowDeleteModal(true);
        setId(mensaje); 
    };

    // Función para ocultar el modal de eliminación
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    // Función para mostrar el modal editar
    const handleShowEditarModal = () => {
        setShowEditarModal(true);
    };

    // Función para cerrar el modal editar
    const handleCloseEditarModal = () => {
        setShowEditarModal(false);
    };

    // Función para mostrar el modal de Enviar
    const handleShowEnviarModal = () => {
        setShowEnviarModal(true);
    };

    // Función para ocultar el modal de Enviar
    const handleCloseEnviarModal = () => {
        setShowEnviarModal(false);
    };

    // Función para mostrar el modal de Actividad
    const handleShowActividadModal = () => {
        setShowActividadModal(true);
    };

    // Función para ocultar el modal de Actividad
    const handleCloseActividadModal = () => {
        setShowActividadModal(false);
    };
    
    return (
        <>
            <div className="flex justify-between mt-6 overflow-auto">
                <p className="px-12 pr-5 font-semibold text-[25px] text-Secundario_2/[0.7] ">
                    Puedes Previsualizar y editar tu{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                        encuenta antes de ser enviadas
                    </span>
                </p>
            </div>
            <div className="o mt-4 p-5  animate-fade-down animate-duration-[800ms]">
                <PrevisualizarEncu
                    onShowDeleteModal={handleShowDeleteModal}
                    onShowEditarModal={handleShowEditarModal}
                    onShowEnviarModal={handleShowEnviarModal}
                    onShowActividadModal={handleShowActividadModal}
                />
            </div>
            {showDeleteModal && <Eliminar onClose={handleCloseDeleteModal} kuko={id} />}
            {showEditarModal && <Editar onClose={handleCloseEditarModal} />}
            {showEnviarModal && <Enviar onClose={handleCloseEnviarModal} />}
            {showActividadModal && <Actividad onClose={handleCloseActividadModal} />}
        </>
    );
};

export default ListarEncuestas;
