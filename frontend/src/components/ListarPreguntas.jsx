import { useState } from 'react'
import useAuth from '../hooks/useAuth'

const Listarp = () => {
    const { auth } = useAuth()

    // Estado para mantener los elementos seleccionados
    const [selectedItems, setSelectedItems] = useState([])

    // Función para manejar el clic en un elemento
    const handleItemClick = item => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item))
        } else {
            setSelectedItems([...selectedItems, item])
        }
    }

    // Función para manejar el clic en "Seleccionar Todo"
    const handleSelectAll = () => {
        setSelectedItems([])
    }

    return (
        <aside className=" flex  flex-col   p-4 h-[260px]  max-h-full  overflow-y-auto  w-full md:w-[570px]  bg-gray-200   rounded-lg relative  ">
            <div className="font-semibol w-full mt-2 relative mb-4">
                <div className="flex flex-col ">
                    <Item
                        selected={selectedItems.includes(1)}
                        onClick={() => handleItemClick(1)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(3)}
                        onClick={() => handleItemClick(3)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(4)}
                        onClick={() => handleItemClick(4)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(5)}
                        onClick={() => handleItemClick(5)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(6)}
                        onClick={() => handleItemClick(6)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(7)}
                        onClick={() => handleItemClick(7)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                    <Item
                        selected={selectedItems.includes(8)}
                        onClick={() => handleItemClick(9)}
                        text="ESTO ES UNA PREGUNTA DE PRUEBA PARA COMPROBACIN DE CAMPO"
                    />
                </div>
            </div>
        </aside>
    )
}

const Item = ({ selected, onClick, text }) => (
    <div className="flex items-center">
        <button
            type="button"
            onClick={onClick}
            className={`rounded-full w-5 h-5 mr-2 mt-1 p-1 focus:bg-Principal_1 ${
                selected ? 'bg-Principal_1' : 'bg-gray-700'
            }`}
        ></button>
        <span className={selected ? 'mr-4 font-semibold' : 'mr-4'}>{text}</span>
    </div>
)

export default Listarp
