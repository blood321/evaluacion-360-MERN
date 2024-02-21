
const Burguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
      
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="flex flex-col px-8 pt-9 pb-2 w-[270px] mx-auto bg-white border-Principal_1 border-solid border-[4.442px] rounded-[33.695px]">
          <div className="flex gap-5 justify-between items-start pr-20 max-md:pr-5"></div>
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
              className="w-[260px] h-[110px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Burguer;
