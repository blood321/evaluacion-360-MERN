import React from "react";

const Prueba = () => {
  return (
    <div className="flex flex-col bg-white  ">
      <div className="flex mt-6 flex-col items-center justify-center  ">
        <div className="flex gap-5  max-md:flex-col max-md:gap-0 max-md: ">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col  px-8 pt-9 pb-2 w-[270px] mx-auto  bg-white border-Principal_1 border-solid border-[4.442px] rounded-[33.695px] ">
              <div className="flex gap-5 justify-between items-start pr-20 max-md:pr-5"></div>
              <div className="flex flex-col mb-4 "> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </div>
              <div className="bg-Principal_3 text-center mb-5 w-full p-2 text-Textcolor_1 border-2 border-Principal_1 uppercase font-bold rounded-full hover:cursor-pointer">
                Evaluación 360°
              </div>
              <div className="bg-Principal_3 text-center mb-5 w-full p-2 text-Textcolor_1 border-2 border-Principal_1 uppercase font-bold rounded-full hover:cursor-pointer">
                Crear Preguntas
              </div>
              <div className="bg-Principal_3 text-center mb-5 w-30 p-2 text-Textcolor_1 border-2 border-Principal_1 uppercase font-bold rounded-full hover:cursor-pointer">
                Encuestas
              </div>
              <div className="bg-Principal_3 text-center mb-8 w-30 p-2 text-Textcolor_1 border-2 border-Principal_1 uppercase font-bold rounded-full hover:cursor-pointer">
                Instructores 360
              </div>
              <div>
                <img
                  src="src/assets/img/logo-black.png"
                  alt="Imagen de logotipo"
                  className="w-[260px] h-[110px] "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md-2 justify-center items-center">
            <div>
              <img
                src="src/assets/img/logo-black.png"
                alt="Imagen de logotipo"
                className="w-[340px] h-[190px]  "
              />
            </div>
            <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end  w-[672px]"></div>
              <div className="mt-5 text-4xl text-center   fotn-roboto text-sky-950 tracking-[5.75px] ">
                <span className="text-2xl leading-8 text-Principal_1  tracking-[4.03px]">
                  {" "}
                  &quot;
                </span>
                <span className="text-2xl font-bold leading-8 text-Principal_1 tracking-[4.26px]">
                  LAS OPINIONES
                </span>{" "}
                <span className="text-2xl leading-8  text-sky-950 tracking-[4.03px]">
                  de los aprendices guían y enriquecen a los instructores
                </span>
                <span className="text-2xl leading-8 text-Principal_1  tracking-[4.03px]">
                  , Mejorando la Calidad de la Educación&quot;.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="text-center bg-Principal_1 text-Principal_3 p-3 md:fixed bottom-0 inset-x-0">
          © 2024 SENA Centro Agropecuario
        </footer>
      </div>
    </div>
  );
};

export default Prueba;
