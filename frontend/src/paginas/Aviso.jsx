import { NavBarUser } from '../components/NavBarUser'
import logo2Principal from '../assets/img/logo2Principal.png'
import useAuth from "../hooks/useAuth";

function Aviso() {
    const {auth} = useAuth();
    return (
        <>
            <header className="flex justify-between items-center fixed top-0 left-0 right-0  p-5  md:w-full md:max-w-[700px] md:mx-auto md:mt-5 ">
                <div className="bg-logoSena w-10 h-10 bg-cover"></div>
                <NavBarUser />
            </header>
            <div className="container mx-auto mt-10 md:mt-20 p-5 md:flex md:flex-col md:items-center ">
                <section className=" mt-4 mx-auto w-full rounded-lg shadow-lg shadow-green-900 overflow-hidden md:flex md:w-[700px] md:h-[400px] md:rounded-3xl md:mx-auto md:fixed ">
                    {/* USUARIO INICIO */}
                    <div className="bg-gradient-to-r from-Principal_1 to-Principal_2 h-[300px]  px-10 text-center rounded-b-3xl md:w-[700px] md:h-full md:rounded-3xl md:mb-6 flex justify-center items-center  ">
                        <h2 className="text-Principal_3 text-3xl font-bold items-center ">{auth.nombre}</h2>
                    </div>
                    {/* COMENZAR ENCUESTA*/}
                    <div className="p-5 h-[380px] flex flex-col items-center justify-center mb-2 rounded-b-3xl bg-Principal_3 md:w-[650px] md:py-4">
                        <img src={logo2Principal} className="w-[180px] h-[100px] md:mt-4" alt="Logo 2" />
                        <div className="">
                            <p className="mb-4 mt-2 text-[16px] font-semibold justify-center text-justify">
                                Queremos asegurar que sus respuestas son completamente anónimas y no tendrán ningún
                                impacto en el desarrollo de tu formación. Tu opinión es sumamente valiosa para nosotros
                                y nos esforzamos por garantizar la confidencialidad de tus respuestas. ¡Gracias por
                                contribuir!
                            </p>
                            <button className="rounded-2xl w-full py-2 mt-4 bg-gradient-to-r from-Secundario_1 to-Secundario_2 border-white border-spacing-1 text-white">
                                INICIAR ENCUESTA
                            </button>
                        </div>
                    </div>
                </section>
                <div>
                    <footer className="text-center  text-Principal_1 p-3 w-full mt-5 md:bg-Principal_1 md:text-Principal_3 md:fixed bottom-0 inset-x-0">
                        &copy; 2024 SENA Centro Agropecuario
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Aviso
