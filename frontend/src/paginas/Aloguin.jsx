function Aloguin() {
    return (
        <div className="font-roboto md:fixed md:h-full ">
            <section className="mx-auto w-full rounded-lg shadow-lg shadow-green-900 overflow-hidden md:flex md:w-[700px] md:h-[400px] md:rounded-3xl md:mx-auto md:fixed bottom-15 inset-x-0  ">
                {/* logo y eslogan */}
                <div className="bg-gradient-to-r from-Secundario_1 to-Secundario_2 h-[356px] pt-8 px-10 text-center rounded-b-3xl md:w-[900px] md:h-full md:rounded-3xl md:mb-6 ">
                    <div className="flex items-center justify-center mb-2 md:mb-7 md:mt-5">
                        <div className="bg-logo1Principal bg-cover w-[250px] h-[110px] "></div>
                    </div>
                    <h2 className="text-Principal_3 text-[19px] font-bold  ">
                        Obtén una visión completa de tu institución con
                        <span className="text-[21px] text-Principal_1 font-extrabold"> SENA 360 </span>
                        la herramienta de Valoraciones
                        <span className="text-[21px]  text-Principal_1 font-extrabold"> 360 </span>
                    </h2>
                    <button className="flex items-center justify-center mx-auto mb-8 mt-8 md:mt15 md:mb-4 bg-gradient-to-r from-Principal_1 to-Principal_2 rounded-full w-10 h-10  hover:transform hover:scale-110 transition-transform duration-400 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                </div>
                {/* formulario */}
                <div className="p-4 h-[380px] flex flex-col items-center justify-center mb-2 rounded-b-3xl bg-Principal_3 md:w-[650px] md:py-2">
                    <div className="bg-logoSena w-12 h-12 bg-cover"></div>
                    <form action="#" className="">
                        <h2 className="mb-4 mt-7 text-[18px] font-semibold justify-center text-justify">
                            Se enviará un código de verificación a tu correo electrónico institucional, el cual está
                            vinculado con tu número de cédula
                        </h2>
                        <input
                            className="border-2 border-green-600 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-Principal_1 invalid:focus:ring-red-400 peer"
                            type="email"
                            placeholder="Ingresa tu Correo Electrónico"
                        />
                        <p className="text-red-800 hidden peer-invalid:block">El Correo es incorrecto</p>
                        <button className="rounded-2xl w-full py-2 mt-4 bg-gradient-to-r from-Principal_1 to-Principal_2 border-white border-spacing-1 text-white">
                            Enviar Código
                        </button>
                    </form>
                </div>
            </section>
            <div>
                <footer className="text-center  text-Principal_1 p-3 w-full mt-5 md:bg-Principal_1 md:text-Principal_3 md:fixed bottom-0 inset-x-0">
                    &copy; 2024 SENA Centro Agropecuario
                </footer>
            </div>
        </div>
    )
}

export default Aloguin
