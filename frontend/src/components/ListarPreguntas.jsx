import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import usePreguntas from "../hooks/usePreguntas";

const Listarp = (tematica,encuestado ) => {
    const { preguntas } = usePreguntas();
    const { auth } = useAuth()
    console.log(preguntas)
    var a =0
    
    // Estado para mantener los elementos seleccionados
    const [selectedItems, setSelectedItems] = useState([]) 
    for (const key in selectedItems) {
       a++
    }
    console.log(a)
    // Función para manejar el clic en un elemento
    const handleItemClick = (itemId) => {
        // Verificar si el elemento ya está seleccionado
        if (selectedItems.includes(itemId)) {
          // Si está seleccionado, lo quitamos de la lista de seleccionados
          setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
          // Si no está seleccionado, lo agregamos a la lista de seleccionados
          setSelectedItems([...selectedItems, itemId]);
        }
      };

    // Función para manejar el clic en "Seleccionar Todo"
    const handleSelectAll = () => {
        setSelectedItems([])
    }

    return (
        <aside className=" flex  flex-col   p-4 h-[260px]  max-h-full  overflow-y-auto  w-full md:w-[570px]  bg-gray-200   rounded-lg relative  ">
            <div className="font-semibol w-full mt-2 relative mb-4">
                <div className="flex flex-col ">
                {preguntas.length ? (
            preguntas.map((pregunta) => (
                    <Item
                    key={pregunta._id}
                        selected={selectedItems.includes(pregunta._id)}
                        onClick={() => handleItemClick(pregunta._id)}
                        text={pregunta.pregunta}                  />  ))
                    ) : (
                      <p className="text-center text-gray-600 uppercase p-5">
                        No hay proyectos
                      </p>
                    )}
               
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
