import { FaUsers } from "react-icons/fa";
import { BsFiletypeXlsx } from "react-icons/bs";
import { useState,useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
const excel = () => {
  const [documento, setDocumento] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mostrar el modal al enviar el formulario
 
  };
  useEffect(() => {


    async function loadTematicas() {
      try {
        const response = await clienteAxios.post('/Excel/fichas',documento);
        console.log(response)
      } catch (error) {
        console.error('Error fetching tematicas:', error);
      }
    }
    loadTematicas();
  }, []);
  console.log(documento);

  return (
    <div className="py-4">
      <div className="  bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <FaUsers />
        subir Aprendices
      </div>
      <div className=" py-4 my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <BsFiletypeXlsx />
        Subir programacion
      </div>
      <div className=" py-4 my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <BsFiletypeXlsx />
        subir Instructores
      </div>
      <div className=" py-4 my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <BsFiletypeXlsx />
        <input
          type="file"
          onChange={(e) => setDocumento(e.target.value)}
        ></input>
        subir fichas
      </div>
    </div>
  );
};

export default excel;
