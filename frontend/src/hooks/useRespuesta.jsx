import { useContext } from "react";
import RespuestasContext from "../context/RespuestasProvider";



const useRespuesta = () => {
    return useContext(RespuestasContext);
}

export default useRespuesta