import useAuth from '../hooks/useAuth'

const Identificador = () => {
    const { auth } = useAuth()
    return (
        <aside
            className="
        flex 
        flex-col 
        p-2
        h-max  
        w-[300px] 
        text-Principal_1
      "
        >
            <div className="text-xl font-bold">
                <div className="flex items-center justify-between">
                    <span className="">ID 360</span>
                    <span className=" font-semibold  text-Secundario_2/[0.5]">12312435</span>
                </div>
            </div>
            <div className="text-xl font-bold">
                <div className="flex items-center justify-between">
                    <span>Total Preguntas</span>
                    <span className=" text-Secundario_1">3</span>
                </div>
            </div>
            <div className="text-xl font-bold">
                <div className="flex items-center justify-between">
                    <span>Tematicas</span>
                    <span className="text-Secundario_1">2</span>
                </div>
            </div>
        </aside>
    )
}

export default Identificador
