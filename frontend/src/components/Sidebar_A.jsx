import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoSena from '../assets/img/logoSena.png'
import {
    FaClipboardList,
    FaChevronRight,
    FaSpellCheck,
    FaStream,
    FaTasks,
    FaWrench,
    FaChevronDown,
} from 'react-icons/fa'

const Sidebar_A = () => {
    const [evaluacionVisible, setEvaluacionVisible] = useState(false)
    const [crearPreguntasVisible, setCrearPreguntasVisible] = useState(false)
    const [flechaAbajo, setFlechaAbajo] = useState(false)

    const toggleEvaluacion = () => {
        setEvaluacionVisible(!evaluacionVisible)
        setFlechaAbajo(!flechaAbajo)
    }

    const togglePreguntas = () => {
        setCrearPreguntasVisible(!crearPreguntasVisible)
        setFlechaAbajo(!flechaAbajo)
    }

    return (
        <div className="h-screen px-[25px] overflow-auto">
            <div className="px-[15px] py-[10px] flex items-center justify-center border-b-[3px] border-Principal_1/[0.3]">
                <img src={logoSena} className="w-[50px] h-[50px] md:mt-4 mb-4" alt="Logo sena" />
            </div>
            <div className="pt-[15px] border-b-[3px] border-Principal_1/[0.2] ">
                <p className="text-[10px] font-extrabold leading-[16px] text-Secundario_2/[0.5]">Crear en Encuestas</p>
                <div
                    className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4 "
                    onClick={toggleEvaluacion}
                >
                    <div className="flex items-center gap-[10px]">
                        <FaClipboardList color="green" />
                        <h2 className="font-normal text-[14px] leading-[20px]">Evaluacion-360°</h2>
                    </div>
                    {flechaAbajo ? <FaChevronDown color="green" /> : <FaChevronRight color="green" />}
                </div>
                {evaluacionVisible && (
                    <ul className="list-disc pl-6 py-[4px] ">
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[200ms] animate-ease-linear animate-normal  hover:border-b hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Aprendices</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[250ms] animate-ease-linear animate-normal hover:border-b hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Compañeros</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[300ms] animate-ease-linear animate-normal hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Jefes</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2  py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[350ms] animate-ease-linear animate-normal hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">AutoEvaluacion</h2>
                        </li>
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
                    {flechaAbajo ? <FaChevronDown color="green" /> : <FaChevronRight color="green" />}
                </div>
                {crearPreguntasVisible && (
                    <ul className="list-disc pl-6 py-[4px] ">
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[200ms] animate-ease-linear animate-normal  hover:border-b hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Aprendices</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  animate-fade-down animate-once animate-duration-[250ms] animate-ease-linear animate-normal hover:border-b hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Compañeros</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2 py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[300ms] animate-ease-linear animate-normal hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">Jefes</h2>
                        </li>
                        <li className="flex items-center gap-2 pb-2  py-1 cursor-pointer  hover:border-b animate-fade-down animate-once animate-duration-[350ms] animate-ease-linear animate-normal hover:border-Principal_1">
                            <FaChevronRight color="green" />
                            <h2 className="font-bold text-sm leading-5 text-Secundario_2">AutoEvaluacion</h2>
                        </li>
                    </ul>
                )}
            </div>

            <div className="pt-[15px] border-b-[3px] border-Principal_1/[0.3] ">
                <p className="text-[10px] font-extrabold leading-[16px] text-Secundario_2/[0.5]"> Encuestas</p>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4">
                    <div className="flex items-center gap-[10px] ">
                        <FaTasks color="green" />
                        <h2 className=" font-normal text-[14px] leading-[20px]">Encuestas</h2>
                    </div>
                    <FaChevronRight color="green" />
                </div>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition-transform hover:translate-x-4">
                    <div className="flex items-center gap-[10px]">
                        <FaStream color="green" />
                        <h2 className=" font-normal text-[14px] leading-[20px]">Resultados</h2>
                    </div>
                    <FaChevronRight color="green" />
                </div>
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
    )
}

export default Sidebar_A
