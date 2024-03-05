import React from "react";
import Sidebar from "../components/Sidebar";


const IniAdmin = () => {
  return (
    <div className="flex flex-col   ">
      <div className="flex mt-6 flex-col items-center justify-center  ">
        <div className="flex gap-5  max-md:flex-col max-md:gap-0 max-md: ">
          
        <Sidebar>
        </Sidebar>
          <div className="flex flex-col md-2 justify-center items-center">
            <div>
              <img
            src="src/assets/img/logo2Principal.png"
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

export default IniAdmin;
