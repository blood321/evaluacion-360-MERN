import { FaUsers } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'

const excel = () => {
    return (
        <div className="py-4 px-4">
            <div className="  bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-4 px-4 rounded">
                <FaUsers />
                subir Aprendices
            </div>
            <div className="  my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-4 px-4 rounded">
                <BsFiletypeXlsx />
                Subir programacion
            </div>
            <div className="  my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-4 px-4 rounded">
                <BsFiletypeXlsx />
                subir Instructores
            </div>
            <div className="  my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-4 px-4 rounded">
                <BsFiletypeXlsx />
                subir fichas{' '}
            </div>
        </div>
    )
}

export default excel
