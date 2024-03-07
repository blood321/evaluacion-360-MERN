import React from "react";
import Sidebar from "../components/Sidebar";
import PrevisualizarEncu from "../components/PrevisualizarEncu";

function Encuestas() {
  return (
    <div className="grid grid-flow-col font-Roboto ">
      <div className="flex  w-[330px] ms:invisible">
        <Sidebar></Sidebar>
      </div>

      <div className="my-5">
        <div className="felx tracking-[2px] my-4">
        <h1 className="flex  text-Secundario_1">
          Puedes previsualizar y editar tu&nbsp;
          <span className="text-Principal_1">
            <b>ENCUESTA 360</b>
          </span>
        </h1>
        <span className="flex  text-Principal_1">antes de ser enviada</span>
        </div>
        <PrevisualizarEncu></PrevisualizarEncu>
      </div>
      <div>
        <div
          className="flex my-6 mb-9 rounded-full "
          style={{ width: "320px" }}
        >
          <div className="w-96  relative left-12">
            <div className="relative rounded-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="Buscar"
                id="buscar"
                className="bg-gray-400 block w-full rounded-full border-0 py-1.5 pl-10 text-Secundario_1 placeholder-text-Secundario_1 placeholder focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Filtrar 360"
              />
            </div>
          </div>
          <div className="text-Secundario_1"></div>
        </div>
      </div>
      <footer className="text-center  bg-Principal_1 text-Principal_3 p-3 md:fixed bottom-0 inset-x-0">
        © 2024 SENA Centro Agropecuario
      </footer>
    </div>
  );
}

export default Encuestas;
