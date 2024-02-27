import { Outlet } from "react-router-dom";

const LayoutSe = () => {
  return (
    <>
      <main className="container  mt-5  p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default LayoutSe;