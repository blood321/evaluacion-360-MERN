

function Alerta({ alerta }) {
  return (
    <div
      className={`${
        alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'
      } bg-gradient-to-br text-center p-2 rounded-xl text-white font-bold text-md mt-2 mb-3 animate-fade-up animate-duration-[1000ms]`}
    >
      {alerta.msg}
    </div>
  );
}

export default Alerta;
