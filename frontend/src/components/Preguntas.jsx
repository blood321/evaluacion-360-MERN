export const Preguntas = () => {
    return (
        <div className="container mx-auto mt-5 md:mt-2 p-2 px-2 md:flex md:flex-col md:items-center">
            <p className="text-[16px] justify-center text-center ">
                ¿En qué medida el instructor fomenta la participación y el diálogo en el aula?
            </p>
            <div className="mt-2 flex justify-center items-center  ">
                <button
                    id="previous-button"
                    className="bg-Principal_2 rounded-lg p-2 text-sm  items-center justify-center text-white"
                >
                    &larr; Pregunta Anterior
                </button>
                <button id="next-button" className="bg-Principal_1 rounded-lg  p-2 text-sm   text-white">
                    Siguiente Pregunta &rarr;
                </button>
            </div>
        </div>
    )
}
