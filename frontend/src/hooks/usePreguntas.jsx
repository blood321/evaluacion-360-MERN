import { useContext } from "react";
import PreguntasContext from "../context/PreguntasProvider";

const usePreguntas =()=>{
    return useContext(PreguntasContext)
}
export default usePreguntas