import React, { useState } from 'react'
import logoSena from '../assets/img/logoSena.png'
import {
    FaClipboardList,
    FaChevronRight,
    FaSpellCheck,
    FaStream,
    FaTasks,
    FaWrench,
    FaChevronDown,
    FaBars,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar_A = () => {
    const [evaluacionVisible, setEvaluacionVisible] = useState(false)
    const [crearPreguntasVisible, setCrearPreguntasVisible] = useState(false)
    const [flechaAbajoEncuestas, setFlechaAbajoEncuestas] = useState(false)
    const [flechaAbajoPreguntas, setFlechaAbajoPreguntas] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false) // Nuevo estado para controlar la visibilidad del menú hamburguesa

    const toggleEvaluacion = () => {
        setEvaluacionVisible(!evaluacionVisible)
        setFlechaAbajoEncuestas(!flechaAbajoEncuestas)
    }

    const togglePreguntas = () => {
        setCrearPreguntasVisible(!crearPreguntasVisible)
        setFlechaAbajoPreguntas(!flechaAbajoPreguntas)
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible) // Cambia el estado del menú hamburguesa
    }

    return (
        <div className="h-screen px-[25px] overflow-auto bg-white">
            <FaBars className="md:hidden" onClick={toggleMenu} /> {/* Menú hamburguesa */}
            <div className="px-[15px] py-[10px] flex items-center justify-center border-b-[3px] border-Principal_1/[0.3]">
                <img src={logoSena} className="w-[50px] h-[50px] md:mt-4 mb-4" alt="Logo sena" />
            </div>
            <div className={menuVisible ? 'md:hidden' : 'hidden md:block'}>
                <div className="pt-[15px] border-b-[3px] border-Principal_1/[0.2] ">
                    <p className="text-[10px] font-extrabold leading-[16px] text-Secundario_2/[0.5]">
                        Crear en Encuestas
                    </p>
                    <div
                        className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4 "
                        onClick={toggleEvaluacion}
                    >
                        <div className="flex items-center gap-[10px]">
                            <FaClipboardList color="green" />
                            <h2 className="font-normal text-[14px] leading-[20px]">Crear Encuestas</h2>
                        </div>
                        {flechaAbajoEncuestas ? <FaChevronDown color="green" /> : <FaChevronRight color="green" />}
                    </div>
                    {evaluacionVisible && (
                        <ul className="list-disc pl-6 py-[4px] ">
                            <Link
                            to="Crear-encuestas-aprendices">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[200ms] animate-ease-linear animate-normal  hover:border-b hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Aprendices</h2>
                            </li>
                            </Link>
                            <Link
                            to="Crear-encuestas-compañeros">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[250ms] animate-ease-linear animate-normal hover:border-b hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Compañeros</h2>
                            </li>
                            </Link>
                            <Link to="Crear-encuestas-jefes">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[300ms] animate-ease-linear animate-normal hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Jefes</h2>
                            </li>
                            </Link>
                        </ul>
                    )}

                    <div
                        className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-6"
                        onClick={togglePreguntas}
                    >
                        <div className="flex items-center gap-[10px]">
                            <FaSpellCheck color="green" />
                            <h2 className=" font-normal text-[14px] leading-[20px]">Crear Preguntas</h2>
                        </div>
                        {flechaAbajoPreguntas ? <FaChevronDown color="green" /> : <FaChevronRight color="green" />}
                    </div>
                    {crearPreguntasVisible && (
                        <ul className="list-disc pl-6 py-[4px] ">
                            <Link to="Crear-preguntas-aprendices">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[200ms] animate-ease-linear animate-normal  hover:border-b hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Aprendices</h2>
                            </li>
                            </Link>
                            <Link to="Crear-preguntas-compañeros">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[250ms] animate-ease-linear animate-normal hover:border-b hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Compañeros</h2>
                            </li>
                            </Link>
                            <Link to="Crear-preguntas-jefes">
                            <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[300ms] animate-ease-linear animate-normal hover:border-Principal_1">
                                <FaChevronRight color="green" />
                                <h2 className="font-bold text-sm leading-5 text-Secundario_2">Jefes</h2>
                            </li>
                            </Link>
                        </ul>
                    )}
                </div>

                <div className="pt-[15px] border-b-[3px] border-Principal_1/[0.3] ">
                    <p className="text-[10px] font-extrabold leading-[16px] text-Secundario_2/[0.5]"> Encuestas</p>
                       <Link to="Listar-encuestas"> 
                    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4">
                        <div className="flex items-center gap-[10px] ">
                            <FaTasks color="green" />
                            <h2 className=" font-normal text-[14px] leading-[20px]">Encuestas</h2>
                        </div>

                        <FaChevronRight color="green" />
                    </div>
                       </Link>
                       <Link to="Resultados">

                    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4">
                        <div className="flex items-center gap-[10px]">
                            <FaStream color="green" />
                            <h2 className=" font-normal text-[14px] leading-[20px]">Resultados</h2>
                        </div>
                        <FaChevronRight color="green" />
                    </div>
                       </Link>
                </div>
                <div className="pt-[20px]  ">
                    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4">
                        <div className="flex items-center gap-[10px] ">
                            <FaWrench color="green" />
                            <h2 className=" font-normal text-[14px] leading-[20px]">Configuracion</h2>
                        </div>
                        <FaChevronRight color="green" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar_A
