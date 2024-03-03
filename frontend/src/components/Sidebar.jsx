import { Link } from "react-router-dom";


const Sidebar = () => {

  return (
    <aside
      className="
    flex flex-col items-center h-[550px] px-1 pt-6 w-[280px] mx-6 my-5 bg-white border-Principal_1 border-solid border-[4.442px] rounded-[33.695px] 
    "
    >
      <div className="mb-2">
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
      </div>

      <Link
        to="crear-proyecto"
        className="bg-Secundario_2 w-9/12 p-2 text-white capitalize font-bold block mt-5 text-center rounded-full hover:bg-white hover:border-Principal_1 hover:border-2 hover:text-black"
      >
        Aprendices
      </Link>

      <Link
        to="crear-proyecto"
        className="bg-Secundario_2 w-9/12 p-2 text-white capitalize font-bold block mt-5 text-center rounded-full hover:bg-white hover:border-Principal_1 hover:border-2 hover:text-black"
      >
        Jefes
      </Link>

      <Link
        to="crear-proyecto"
        className="bg-Secundario_2 w-9/12 p-2 text-white capitalize font-bold block mt-5 text-center rounded-full hover:bg-white hover:border-Principal_1 hover:border-2 hover:text-black"
      >
        Compañeros
      </Link>

      <Link
        to="crear-proyecto"
        className="bg-Secundario_2 w-9/12 p-2 mb-8 text-white capitalize font-bold block mt-5 text-center rounded-full hover:bg-white hover:border-Principal_1 hover:border-2 hover:text-black"
      >
        AutoEvaluación
      </Link>
      <div className="">
        <img
          src="src/assets/img/logo2Principal.png"
          alt="Imagen logotipo"
          className="w-[210px] h-[110px] "
        />
      </div>
    </aside>
  );
};

export default Sidebar;
