import useAuth from "../hooks/useAuth";

const IdentificadorPreguntas = () => {
  const { auth } = useAuth();
  return (
    <aside
      className="
        flex 
        flex-col 
        p-2
        h-max  
        w-flex
        bg-gray-200 
        border-Principal_1 
        border-solid 
        border-[3.442px] 
        rounded-[30.695px] 
      "
    >
        <div className=" flex flex-col items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
          />
        </svg>
        </div>
      <table class="min-w-full text-left text-sm font-light">

        <tbody className="font-bold">
          <tr>
            <td class="whitespace-nowrap px-6 py-1 text-Principal_1">
              Valoracion
            </td>
            <td class="whitespace-nowrap px-6 py-1 text-Secundario_1">JEFES</td>
          </tr>
          <tr>
            <td class="whitespace-nowrap px-6 py-1 text-Principal_1">ID 360</td>
            <td class="whitespace-nowrap px-6 py-1 text-Secundario_1">
              123456
            </td>
          </tr>
          <tr>
            <td class="whitespace-nowrap px-6 py-1 text-Principal_1">Nombre</td>
            <td class="whitespace-nowrap px-6 py-1 text-Secundario_1">
              Ramiro Perez
            </td>
          </tr>
          <tr>
            <td class="whitespace-nowrap px-6 py-1 text-Principal_1">
              Fecha Limite
            </td>
            <td class="whitespace-nowrap px-6 py-1 text-Secundario_1">
              20/20/2020
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};

export default IdentificadorPreguntas;
