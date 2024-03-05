import Sidebar_A from '../components/Sidebar_A'
import Header from '../components/Header'
import logo2Principal from '../assets/img/logo2Principal.png'

const Admin = () => {
    document.body.style.overflowY = 'hidden'
    return (
        <>
            <div className="flex">
                <div className="basis-[15%] h-full border">
                    <Sidebar_A />
                </div>
                <div className="basis-[85%] border">
                    <Header />
                    <div className="px-auto py-1 flex items-center justify-center ">
                        <img src={logo2Principal} className="w-[500px] h-[300px] md:mt-1 mb-1" alt="Logo" />
                    </div>
                    <div className=" px-[50px] flex items-center justify-center">
                        <h2 className="text-[28px] font-semibold justify-center text-justify text-Principal_1">
                            "
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 font-extrabold text-[30px]">
                                LAS OPINIONES{' '}
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-Secundario_1 to-Secundario_2 ">
                                de los Aprendices guían y enriquecen a los Instructores
                            </span>
                            , Mejorando la Calidad de la Educación"
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <footer className="text-center  text-Principal_1 p-3 w-full mt-5 md:bg-Principal_1 md:text-Principal_3 md:fixed bottom-0 inset-x-0">
                    &copy; 2024 SENA Centro Agropecuario
                </footer>
            </div>
        </>
    )
}
export default Admin
