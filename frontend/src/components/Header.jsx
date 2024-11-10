import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'

function Header() {
    const [modalVisible, setModalVisible] = useState(false)
    const navigate = useNavigate()
    const handleLogout = () => {
        setModalVisible(true)
    }
    const handleClose = () => {
        setModalVisible(false)
    }
    const handleConfirm = () => {
        localStorage.removeItem('token')
        setModalVisible(false)
        navigate('/login-adm')
    }

    return (
        <header className=" md:px-4 md:py-3 bg-white border-b flex flex-col  ">
            <div className=" md:flex md:justify-between">
                <h2 className="text-4xl  font-black text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                        Encuestas
                    </span>
                </h2>

                <nav className="flex items-center gap-4">
                    {modalVisible && (
                        <Modal
                            title="¿Está seguro que desea Cerrar Sesión?"
                            message="Si lo hace perderá lo que no haya guardado."
                            onConfirm={handleConfirm}
                            onCancel={handleClose}
                        />
                    )}
                    <button
                        onClick={handleLogout}
                        type="button"
                        className="text-white text-sm bg-Principal_2 p-2 rounded-md capitalize font-bold"
                    >
                        Cerrar Sesión
                    </button>
                </nav>  
            </div>
        </header>
    )
}

export default Header
