import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'

const FormularioProyecto = () => {
    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const params = useParams()
    const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos()

    useEffect(() => {
        if (params.id) {
            setId(proyecto._id)
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente)
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, descripcion, fechaEntrega, cliente].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            })
            return
        }
        // Pasar los datos hacia el provider
        await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente })
        setId(null)
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')
    }

    const { msg } = alerta
    return (
        <form className="bg-white px-10 w-[400px] md:w-[500px] " onSubmit={handleSubmit}>
            <div className="">
                <label className="text-gray-700 capitalize font-bold text-md" htmlFor="nombre">
                    Nombre Encuesta
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre Encuesta"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label className="text-gray-700 capitalize font-bold text-md" htmlFor="descripcion">
                    Descripción
                </label>
                <textarea
                    id="descripcion"
                    className="border-2 w-full p-2 mt-2
          placeholder-gray-400 rounded-md"
                    placeholder="Descripción dela Encuesta"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-2">
                <label className="text-gray-700 capitalize font-bold text-md" htmlFor="fecha-entrega">
                    Fecha Limite
                </label>
                <input
                    id="fecha-entrega"
                    type="date"
                    className="border-2 w-full p-2 mt-2
          placeholder-gray-400 rounded-md"
                    value={fechaEntrega}
                    onChange={e => setFechaEntrega(e.target.value)}
                ></input>
            </div>

            <input
                type="submit"
                value={id ? 'Actualizar Proyecto' : 'Crear Encuesta'}
                className="bg-gradient-to-r from-Principal_1 to-Principal_2 w-full p-3 capitalize font-bold text-white rounded cursor-pointer "
            />
            {msg && <Alerta alerta={alerta} className="absolute bottom-0 left-0 right-0" />}
        </form>
    )
}

export default FormularioProyecto
