const ModalConfirmar = ({ onClose }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full justify-center"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-gray-50 px-16 py-14">
                        <div className="flex justify-center">
                            <div className="rounded-full bg-green-200 p-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-8 w-8 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
                            Encuesta creada correctamente
                        </h3>
                        <p className="w-auto text-center font-normal text-gray-600">
                            "Puedes previsualizar tu encuesta en el módulo de encuestas antes de enviarla."
                        </p>
                        <button
                            onClick={onClose}
                            className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-Principal_1 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmar
