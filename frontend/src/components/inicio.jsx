
import logo2Principal from '../assets/img/logo2Principal.png'
const Inicio = () => {
    
    return (
        <>
            <div className="px-auto py-1 flex items-center justify-center ">
                <img src={logo2Principal} className="w-[500px] h-[300px] md:mt-1 mb-1" alt="Logo" />
            </div>
            <div className=" px-[50px] flex items-center justify-center">
                <h2 className="text-[28px] font-semibold justify-center text-justify text-Principal_1">
                    "
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2 font-extrabold text-[30px]">
                        las opiniones{' '}
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Secundario_1 to-Secundario_2 ">
                    de los Aprendices enriquecen la labor de los Instructores,
                    </span>
                    , Mejorando la Calidad educativa."
                </h2>
            </div>
        </>
    )
}
export default Inicio
