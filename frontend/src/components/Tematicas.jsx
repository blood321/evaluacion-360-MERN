import React, { useState, useEffect,useLocation } from 'react';
import clienteAxios from '../config/clienteAxios';

  const Tematicas = ({tematica}) => {
    const [tematicas, setTematicas] = useState([]);
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState("");
    useEffect(() => {


      async function loadTematicas() {
        try {
          const response = await clienteAxios('/tematica/listar-tematicas');
          setTematicas(response.data);
        } catch (error) {
          console.error('Error fetching tematicas:', error);
        }
      }
      loadTematicas();
    }, []);
    const handleTematicaChange = (event) => {
      setTematicaSeleccionada(event.target.value);
    };
 tematica(tematicaSeleccionada)
  return (
    <div className="flex flex-col px-4">
      <p className="font-extrabold text-[30px] text-Principal_2/[0.9]">Selecciona la temática</p>
      <div className="flex items-center justify-between gap-[10px] py-2">
        <select
          className="bg-Principal_3 w-[300px] p-2 text-Principal_1 capitalize font-semibold block mt-1 text-center rounded-lg border border-Secundario_2 hover:text-Principal_1"
          value={tematicaSeleccionada}
          onChange={handleTematicaChange}
        >
          <option value="" disabled>
            Temáticas
          </option>
          {tematicas.length ? (
            tematicas.map((tematica) => (
              <option key={tematica._id} value={tematica._id}>{tematica.tematica}</option>
            ))
          ) : (
            <option disabled>No hay temáticas disponibles</option>
          )}
        </select>
      </div>
     
    </div>
  );
}

export default Tematicas;
