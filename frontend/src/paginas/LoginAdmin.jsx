import "boxicons";

const LoginAdmin = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src="src/assets/img/logo2Principal.png"
            alt="Imagen de logotipo"
            className="w-[370px] h-[210px]"
          />
        </div>
        <form className="bg-white rounded-3xl p-8 border-Principal_1 border-4">

          <div className="my-1 flex items-center justify-center">
            <box-icon name='cog' animation='spin' rotate='90' className="mr-1 "></box-icon>
          </div>

          <div className="my-5 flex items-center relative">
            
            <input
              id="email"
              type="text"
              placeholder="Cedula"
              className="text-center w-full mt-2 p-2 border-2 rounded-full border-Principal_1 bg-gray-50"
            />
          </div>

          <div className="my-5">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="text-center w-full mt-2 p-2 border-2 rounded-full border-Principal_1 bg-gray-50 mb-7"
            />
          </div>
          <input
            type="submit"
            value="Ingresar"
            className="bg-Principal_3 p-2  w-[100px] text-Textcolor_1 border-2 border-Principal_1 capitalize font-bold rounded-full hover:cursor-pointer ancho-personalizado"
            />
        </form>
      </div>
      <div>
        <footer className="text-center bg-Principal_1 text-Principal_3 p-3 md:fixed bottom-0 inset-x-0">
          © 2024 SENA Centro Agropecuario
        </footer>
      </div>
    </>
  );
};

export default LoginAdmin;
