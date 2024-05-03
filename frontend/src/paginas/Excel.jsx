
import { BsClipboard2Check } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";

const excel = () => {
  const [documento, setDocumento] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFileChange(e); // Add this line
    if (documento) {
      try {
        const response = await clienteAxios.post("/Excel/fichas", documento);
        console.log(response);
      } catch (error) {
        console.error("Error fetching tematicas:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setDocumento(file);
    } else {
      alert("Solo se permiten archivos Excel (.xlsx)");
    }
  };

  return (
    <div className="py-4">
      <div className=" my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <FaUserGraduate />
        subir Aprendices
        <div className="flex">
          <input
            type="file"
            className="flex-grow"
            onChange={handleFileChange}
          />
          <button
            className="bg-Principal_1 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            disabled={!documento}
          >
            Subir</button>
        </div>
      </div>
      <div className=" my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <BsClipboard2Check />
        Subir programacion
        <div className="flex">
          <input
            type="file"
            className="flex-grow"
            onChange={handleFileChange}
          />
          <button
            className="bg-Principal_1 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            disabled={!documento}
          >
            Subir
          </button>
        </div>
      </div>
      <div className=" my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <FaUsersRectangle />
        Subir instructores
        <div className="flex">
          <input
            type="file"
            className="flex-grow"
            onChange={handleFileChange}
          />
          <button
            className="bg-Principal_1 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            disabled={!documento}
          >
            Subir
          </button>
        </div>
      </div>
      <div className=" my-1 bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
        <FaUserPen />
        subir fichas
        <div className="flex">
          <input
            type="file"
            className="flex-grow"
            onChange={handleFileChange}
          />
          <button
            className="bg-Principal_1 text-white px-4 py-2 rounded"
            onClick={handleFileChange}
            disabled={!documento}
          >
            Subir
          </button>
        </div>
      </div>
    </div>
  );
};

export default excel;
