import { NavBarUser } from '../components/NavBarUser'
import { Preguntas } from '../components/Preguntas'
import { Respuestas } from '../components/Respuestas'
function Responder() {
    document.body.style.overflowY = 'hidden'
    return (
        <>
            <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-10 md:w-full md:mx-auto md:mt-4">
                <div className="bg-logosena w-10 h-10 bg-cover"></div>
                <NavBarUser />
            </header>
            <div className="mx-auto mt-20 md:mt-20 p-3 px-5 md:flex  ">
                <section className="mt-4 mx-auto w-full rounded-md shadow-lg shadow-green-800 overflow-hidden md:grid md:grid-cols-3 md:grid-rows-[450px] md:w-auto md:h-[450px] md:rounded-3xl md:mx-auto   ">
                    <div className="bg-gradient-to-r from-Principal_1 to-Principal_2 h-[200px] px-10 text-center rounded-b-3xl md:w-[350px] md:h-full md:rounded-3xl md:mb-6 flex flex-col md:flex-col justify-center items-center md:grid-row">
                        <h2 className="text-Principal_3 text-3xl font-bold items-center md:mb-2">NOMBRE ENCUESTA</h2>

                        <div className="mt-4 md:mt-20">
                            <p className="text-Principal_3 text-2xl items-center mb-6">Tiempo restante: 10 minutos</p>
                        </div>
                    </div>
                    <div className="mx-auto md:w-[370px] md:h-full md:flex md:justify-center md:items-center  ">
                        <Preguntas />
                    </div>
                    <div className="md:ml-5 md:mr-2">
                        <div className="mx-auto md:w-full h-[250px] md:h-full mb-9 overflow-y-auto ">
                            <Respuestas />
                       
                        </div>
                    </div>
                </section>
                <div>
                    <footer className="text-center text-Principal_1 p-3 w-full mt-5 md:bg-Principal_1 md:text-Principal_3 md:fixed bottom-0 inset-x-0">
                        &copy; 2024 SENA Centro Agropecuario
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Responder
