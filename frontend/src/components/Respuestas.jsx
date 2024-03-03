import React, { useState } from 'react';
import Instructor from '../assets/img/instructor1.jpg';
import useRespuestas from '../hooks/useRespuestas';
import { FormGroup, Label, Input } from 'reactstrap';

const Respuestas = () => {
    const { respuestas } = useRespuestas();
    const [seleccion, setSeleccion] = useState('');

    const caja = respuestas.map(respuesta => ({ instructor: respuesta.instructor.nombre, id: respuesta.instructor._id }));
    console.log(caja)
    const nombres = [...new Set(caja.map(instructor => instructor.instructor))];
    const ids = [...new Set(caja.map(instructor => instructor.id))];

    return (
        nombres.length ? (
            nombres.map((nombre) => (
                <div key={nombre}>
                    {ids.length ? (
                        ids.map((id) => (
                            <div className="flex md:flex-row p-3" key={id + nombre}>
                                <div className="mb-4 mt-4 flex items-center p-2 md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                                    <img
                                        src={Instructor}
                                        alt="Instructor 1"
                                        className="instructor__photo max-w-[70px] h-[70px] rounded-full"
                                    />
                                    <h2 className="font-bold text-lg ml-4">{nombre}</h2>
                                    <div className="flex flex-col ml-2 text-[15px]">
                                        <FormGroup className="formGroupRadios">
                                            <FormGroup>
                                                <Input
                                                    id={`${id}`}
                                                    type="radio"
                                                    value="Si"
                                                    checked={seleccion === "Si"}
                                                    onChange={() => setSeleccion("Si")}
                                                />
                                                <Label for={`si-${id}`}>Si{id}</Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    id={`${id}`}
                                                    type="radio"
                                                    value="No"
                                                    checked={seleccion === "No"}
                                                    onChange={() => setSeleccion("No")}
                                                />
                                                <Label for={`no-${id}`}>No</Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    id={`${id}`}
                                                    type="radio"
                                                    value="Tal vez"
                                                    checked={seleccion === "Tal vez"}
                                                    onChange={() => setSeleccion("Tal vez")}
                                                />
                                                <Label for={`talvez-${id}`}>Tal vez</Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    id={`${id}`}
                                                    type="radio"
                                                    value="No sé"
                                                    checked={seleccion === "No sé"}
                                                    onChange={() => setSeleccion("No sé")}
                                                />
                                                <Label for={`nose-${id}`}>No sé</Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 uppercase p-5">No hay proyectos</p>
                    )}
                </div>
            ))
        ) : null
    );
};

export default Respuestas;
