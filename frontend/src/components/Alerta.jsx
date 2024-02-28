

function Alerta({ alerta }) {
  return (
    <div
      className={`${
        alerta.error ? 'from-gray-300 to-gray-330' : 'from-sky-400 to-sky-600'
      } bg-gradient-to-br text-center p-1 rounded-xl text-black font-Roboto text-sm mb-1`}
    >
      {alerta.msg}
    </div>
  );
}

export default Alerta;
