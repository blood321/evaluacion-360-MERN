import React from "react";
function Enviar({ onClose }) {
  return (
    <div>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-89 max-w-lg p-2 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 -m-1 flex items-center text-green-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <h2 className="text-[16px] font-bold py-5">La encuesta ha sido enviada con éxito.</h2>
            </div>
            <div className="p-1 mt-1 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-black rounded-full hover:shadow-lg hover:bg-green-300" onClick={onClose}>Aceptar</button>
              {/* Aquí agregamos un manejador de eventos para cerrar el modal cuando el usuario hace clic en "Cancelar" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enviar;
