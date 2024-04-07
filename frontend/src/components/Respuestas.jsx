import React, { useReducer } from "react";
import Instructor from "../assets/img/instructor1.jpg";


const initialState = {
  respuestas: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_RESPUESTAS":
      return {
        ...state,
        respuestas: {
          ...state.respuestas,
          [action.instructor]: action.respuestas,
        },
      };
    default:
      return state;
  }
}

const Respuestas = ({instructor, opciones, respuestas}) => {
  const selectedOption = respuestas || "";
  console.log(selectedOption);
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOptionChange = (event, instructor) => {
    const { value } = event.target;
    dispatch({
      type: "SET_RESPUESTAS",
      instructor: instructor,
      respuestas: value
    });
  };

  return (
    <div className="flex md:flex-row p-3">
      <div className="mb-4 mt-4 flex items-center p-2 md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
        <img
          src={Instructor}
          alt="Instructor 1"
          className="instructor__photo max-w-[70px] h-[70px] rounded-full"
        />
        <h2 className="font-bold text-lg ml-4">{instructor}</h2>
        <div className="flex flex-col ml-2 text-[15px]">
          {opciones.map((opcion, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                id={`rating-${instructor}-${index}`}
                name={`rating-${instructor}`}
                value={opcion}
                className="hidden"
                checked={selectedOption}
                onChange={handleOptionChange}
              />
              <label
                htmlFor={`rating-${instructor}-${index}`}
                className={`cursor-pointer flex items-center mb-2 ${
                  selectedOption === opcion
                    ? "text-Principal_1"
                    : "text-gray-600"
                }`}
              >
                <span
                  className={`radio-button mr-2 w-4 h-4 rounded-full bg-gray-500 ${
                    selectedOption === opcion ? "bg-green-600" : ""
                  }`}
                />
                {opcion}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Respuestas;
