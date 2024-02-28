import Instructor from '../assets/img/instructor1.jpg'
export const Respuestas = () => {
    return (
        <div className="flex  md:flex-row p-3">
            <div className="mb-4 mt-4 flex items-center p-2  md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl  overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                <img
                    src={Instructor}
                    alt="Instructor 1"
                    className="instructor__photo max-w-[70px] h-[70px] rounded-full"
                />
                <h2 className=" font-bold text-lg ml-4">Moises Garcia</h2>
                <div className=" flex flex-col ml-2 text-[15px] ">
                    <input
                        type="radio"
                        id="rating-instructor-1-excelente"
                        name="rating-instructor-1"
                        value="Excelente"
                        className="hidden"
                    />
                    <label htmlFor="rating-instructor-1-excelente" className="cursor-pointer flex items-center mb-2">
                        <span className="radio-button mr-2 w-4 h-4 rounded-full bg-gray-500"></span>
                        Excelente
                    </label>
                    <input
                        type="radio"
                        id="rating-instructor-1-muybueno"
                        name="rating-instructor-1"
                        value="Muy Bueno"
                        className="hidden"
                    />
                    <label htmlFor="rating-instructor-1-muybueno" className="cursor-pointer flex items-center mb-2">
                        <span className="radio-button mr-2 w-4 h-4 rounded-full bg-gray-500"></span>
                        Muy Bueno
                    </label>
                    <input
                        type="radio"
                        id="rating-instructor-1-bueno"
                        name="rating-instructor-1"
                        value="Bueno"
                        className="hidden"
                    />
                    <label htmlFor="rating-instructor-1-bueno" className="cursor-pointer flex items-center mb-2">
                        <span className="radio-button mr-2 w-4 h-4 rounded-full bg-gray-500"></span>
                        Bueno
                    </label>
                    <input
                        type="radio"
                        id="rating-instructor-1-regular"
                        name="rating-instructor-1"
                        value="Regular"
                        className="hidden"
                    />
                    <label htmlFor="rating-instructor-1-regular" className="cursor-pointer flex items-center mb-2">
                        <span className="radio-button mr-2 w-4 h-4 rounded-full bg-gray-500"></span>
                        Regular
                    </label>
                    <input
                        type="radio"
                        id="rating-instructor-1-malo"
                        name="rating-instructor-1"
                        value="Malo"
                        className="hidden"
                    />
                    <label htmlFor="rating-instructor-1-malo" className="cursor-pointer flex items-center mb-2">
                        <span className="radio-button mr-2 w-4 h-4 rounded-full bg-gray-500"></span>
                        Malo
                    </label>
                </div>
            </div>
        </div>
    )
}
