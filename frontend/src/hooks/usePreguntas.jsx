import { useContext } from "react";
import PreguntasContext from "../context/preguntasProvider";



const usePreguntas = () => {
    return useContext(PreguntasContext);
}

export default usePreguntas