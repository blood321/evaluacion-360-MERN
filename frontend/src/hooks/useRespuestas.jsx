import { useContext } from "react";
import RespuestasContext from "../context/RespuestasProviser"



const useRespuestas = () => {
    return useContext(RespuestasContext);
}

export default useRespuestas