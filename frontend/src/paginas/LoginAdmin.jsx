import "boxicons";

const LoginAdmin = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src="src/assets/img/logo2Principal.png"
            alt="Imagen de logotipo"
            className="w-[380px] h-[230px]"
          />
        </div>
        <form className=" rounded-3xl md:h-[350px] p-6 border-Principal_1 border-4">
          <div className="my-1 flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
          </div>

          <div className="my-2 mt-4 flex items-center relative">
            <input
              id="email"
              type="text"
              placeholder="Cedula"
              className="text-center w-full mt-2 p-1 border-2 rounded-full border-Principal_1 bg-gray-50"
            />
          </div>

          <div className="my-5">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="text-center  w-full mt-1 p-1 border-2 rounded-full border-Principal_1 bg-gray-50 mb-7"
            />
          </div>
          <div className="flex items-center justify-center drop-shadow-lg  ">
          <input
            type="submit"
            value="Ingresar"
            className="bg-Principal_3 mt-2 p-1 w-[120px] text-center text-Textcolor_1 border-2 border-Principal_1 capitalize font-bold rounded-full hover:cursor-pointer shadow-lg shadow-Principal_1 "
          />
          </div>
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
