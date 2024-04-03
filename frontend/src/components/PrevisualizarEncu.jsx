import React from 'react'
import { FaTrash, FaPencilAlt, FaLocationArrow } from 'react-icons/fa'

const PrevisualizarEncu = ({ onShowDeleteModal, onShowEnviarModal }) => {
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right  dark:text-black font-semibold">
                <thead class="text-xs text-white uppercase bg-Principal_1 dark:bg-Secundario_1 dark:text-white">
                    <tr>
                        <th scope="col" class="p-4"></th>
                        <th scope="col" class="px-6 py-3">
                            Nombre dela Encuesta
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha de Creacion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dirigido A
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tematicas
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Total Respuestas
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class=" border-b dark:bg-white dark:border-gray-700 hover:bg-Principal_1 dark:hover:bg-gray-300 font-semibold">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input
                                    id="checkbox-table-search-3"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label for="checkbox-table-search-3" class="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-Principal_1 "
                        >
                            Nombre
                        </th>
                        <td class="px-6 py-4">25-02-2024</td>
                        <td class="px-6 py-4">Aprendices</td>
                        <td class="px-12 py-4">4</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activa
                            </div>
                        </td>
                        <td class="px-16 py-4">0</td>

                        <td class="flex justify-between px-5 py-4">
                            <a
                                href="#"
                                class="font-medium text-Principal_1 dark:text-Principal_2 hover:underline pr-3"
                                onClick={onShowEnviarModal}
                            >
                                <FaLocationArrow />
                            </a>
                            <a href="#" class="font-medium text-Secundario_1 dark:text-Secundario_2 hover:underline">
                                <FaPencilAlt />
                            </a>
                            <a
                                href="#"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 "
                                onClick={onShowDeleteModal}
                            >
                                <FaTrash />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300 ">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input
                                    id="checkbox-table-search-3"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label for="checkbox-table-search-3" class="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            class="px-6 py-4 font-bold text-Principal_1 whitespace-nowrap dark:text-Principal_1"
                        >
                            Nombre
                        </th>
                        <td class="px-6 py-4">23-09-2024</td>
                        <td class="px-6 py-4">Jefes</td>
                        <td class="px-12 py-4">2</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-red-600 me-2"></div> Inactiva
                            </div>
                        </td>
                        <td class="px-16 py-4">50</td>

                        <td class="flex justify-between px-5 py-4 sm:py-5">
                            <a
                                href="#"
                                class="font-medium text-Principal_1 dark:text-Principal_2 hover:underline pr-3"
                                onClick={onShowEnviarModal}
                            >
                                <FaLocationArrow />
                            </a>
                            <a href="#" class="font-medium text-Secundario_1 dark:text-Secundario_2 hover:underline">
                                <FaPencilAlt />
                            </a>

                            <a
                                href="#"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                                onClick={onShowDeleteModal}
                            >
                                <FaTrash />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PrevisualizarEncu
