import Instructor from "../models/instructor.js";

const perfilInstructor = async (req, res) => {
    const { id } = req.params
    const instructor = await Instructor.findById(id)

    res.json(instructor.nombre)
}

export {
    perfilInstructor,
}