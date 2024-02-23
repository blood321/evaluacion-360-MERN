import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Tematicas = () => {
  const { auth } = useAuth();
  return (
    <aside
      className="
    flex 
    flex-col 
    items-center 
    h-max  
    w-[220px] 
    mx-9  
    my-9 
    min-4
    bg-white 
    border-Principal_1 
    border-solid 
    border-[2.442px] 
    rounded-[33.695px] 
    "
    >
      <p className="text-xl font-bold">TEMATICA</p>

      <Link
  to="#"
  className="bg-Principal_3 w-9/12 p-2 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2"
>
  Pedagógica
</Link>

<Link
  to="#"
  className="bg-Principal_3 w-9/12 p-2 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2"
>
  Tecnica
</Link>

<Link
  to="#"
  className="bg-Principal_3 w-9/12 p-2 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2"
>
  H-Blandas
</Link>

<Link
  to="crear-proyecto"
  className="bg-Principal_3 w-9/12 p-2 text-black mb-4 capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1  hover:border-2"
>
  Profesional
</Link>

      
    </aside>
  );
};

export default Tematicas;
