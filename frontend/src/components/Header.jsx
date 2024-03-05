function Header() {
    return (
        <header className="px-4 py-3 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl  font-black text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                        Encuestas
                    </span>
                </h2>

                <input
                    type="search"
                    placeholder="Buscar Encuesta"
                    className="rounded-lg lg:w-96 block p-2 border border-Principal_1"
                />
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="text-white text-sm bg-Principal_2 p-3 rounded-md capitalize font-bold"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
