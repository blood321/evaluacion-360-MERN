import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import usePreguntas from "../hooks/usePreguntas";

const Listarp = ({ addMensaje, tematicaSeleccionada }) => {
  const { preguntas } = usePreguntas();
  const [selectedItems, setSelectedItems] = useState([]);
  const { auth } = useAuth();
  // Filtrar preguntas por temática seleccionada
  const preguntasFiltradas = preguntas.filter((pregunta) => {
    // Verificar si la pregunta tiene la temática seleccionada
    const tieneTematica = pregunta.tematica === tematicaSeleccionada;

    // Verificar si la página actual es "/inicio-admin/Crear-encuestas-aprendices"
    const esPaginaAprendices =
      location.pathname === "/inicio-admin/Crear-encuestas-aprendices";
    const esPaginacompañeros =
      location.pathname === "/inicio-admin/Crear-encuestas-companeros";
    const espaginaJefes =
      location.pathname === "/inicio-admin/Crear-encuestas-jefes";
    // Filtrar las preguntas que cumplan con ambos criterios
    return (
      (tieneTematica &&
        (esPaginaAprendices ? pregunta.encuestado === "Aprendiz" : null)) ||
      (tieneTematica &&
        (esPaginacompañeros ? pregunta.encuestado === "Compañeros" : null)) ||
      (tieneTematica &&
        (espaginaJefes ? pregunta.encuestado === "Jefes" : null))
    );
  });

  console.log(preguntasFiltradas);
  // Función para manejar el clic en un elemento
  const handleItemClick = (itemId) => {
    // Verificar si el elemento ya está seleccionado
    if (selectedItems.includes(itemId)) {
      // Si está seleccionado, lo quitamos de la lista de seleccionados
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      // Si no está seleccionado, lo agregamos a la lista de seleccionados
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  useEffect(() => {
    // Obtener la cantidad de elementos seleccionados
    addMensaje(selectedItems);
  }, [selectedItems]);

  return (
    <aside className="flex flex-col p-4 h-[260px] max-h-full overflow-y-auto w-full md:w-[530px] bg-gray-200 rounded-lg relative">
      <div className="font-semibol w-full mt-2 relative mb-4">
        <div className="flex flex-col">
          {preguntasFiltradas.length ? (
            preguntasFiltradas.map((pregunta) => (
              <Item
                key={pregunta._id}
                selected={selectedItems.includes(pregunta._id)}
                onClick={() => handleItemClick(pregunta._id)}
                text={pregunta.pregunta}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 uppercase p-5">
              No hay preguntas para la temática seleccionada
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

const Item = ({ selected, onClick, text }) => (
  <div className="flex items-center">
  <input
    type="checkbox"
    checked={selected}
    onChange={onClick}
    className={`${
      selected ? "accent-green-500" : "accent-green-500"} mr-2`}
  />
  <span className={selected ? "mr-4 font-semibold" : "mr-4"}>{text}</span>
</div>
);

export default Listarp;
