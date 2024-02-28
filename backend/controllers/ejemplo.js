// // Primero, define tus modelos (si aún no lo has hecho)
// const profesorSchema = new mongoose.Schema({ nombre: String });
// const estudianteSchema = new mongoose.Schema({ nombre: String });

// const claseSchema = new mongoose.Schema({
//   profesor: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' },
//   estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' }
// });

// const Profesor = mongoose.model('Profesor', profesorSchema);
// const Estudiante = mongoose.model('Estudiante', estudianteSchema);
// const Clase = mongoose.model('Clase', claseSchema);

// // Luego, puedes hacer una consulta para encontrar una clase con un profesor y estudiante específicos
// const profesorId = // el ID del profesor
// const estudianteId = // el ID del estudiante

// Clase.findOne({ profesor: profesorId, estudiante: estudianteId })
//   .populate('profesor')
//   .populate('estudiante')
//   .exec((err, clase) => {
//     if (err) return handleError(err);
//     if (clase) {
//       console.log(El profesor ${clase.profesor.nombre} está dando clase al estudiante ${clase.estudiante.nombre}.);
//     } else {
//       console.log('No se encontró una clase con ese profesor y estudiante.');
//     }
//   });