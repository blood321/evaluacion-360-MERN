
const NewPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Reestablecer password{' '}
        <span className="text-slate-700">Proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-x1 font-bold"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="write your new password"
            className="w-full mt-3 p-3 border rounded-x1 bg-gray-50"
          />
        </div>
        

        <input
          type="submit"
          value="Confirm Password"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-color"
        />
      </form>
      
    </>
  )
}

export default NewPassword