import { Link } from "react-router-dom"

const PreviewProyecto = ({proyecto}) => {
    const {nombre, _id, cliente } = proyecto
  return (
    <div className="border-b p-5 bg-green-400 flex">
        <p className="flex-1 capitalize  text-lg">{nombre} <span className="text-md text-gray-500 capitalize">{''}{cliente}</span></p>

        <Link to={`${_id}`} className="text-gray-600 hover:text-gray-800 capitalize text-md font-bold">
            Ver Proyecto
        </Link>
    </div>
  )
}

export default PreviewProyecto