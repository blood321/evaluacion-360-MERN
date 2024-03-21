import { useContext } from "react";
import EncuestasContext from "../context/EncuestasProvider";



const useEncuestas = () => {
    return useContext(EncuestasContext);
}

export default useEncuestas