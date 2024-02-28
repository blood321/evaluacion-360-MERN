import { Link } from "react-router-dom";


const Listarp = ({proyecto}) => {
  const { pregunta} = proyecto;
  
  return (

<div className="flex flex-col">
<div className="flex items-center ">
  <button
    type="checkbox"
    className={`rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:bg-Principal_1  'bg-Principal_1' : 'bg-gray-300' hover:bg-Principal_1`}
  ></button>
  <span className="mr-4">
  {pregunta}
  </span>
</div>      
</div>
  
  );
};

export default Listarp;