import tematica from "../models/tematica.js";

const nuevaTematica = async (req, res) => {
  const tematicaN = new tematica(req.body);

  try {
    const tematicaAlmacenada = await tematicaN.save();
    res.json(tematicaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const tematicas = async (req, res) => {
  try {
    const lasta = await tematica.find();
    res.json(lasta);
  } catch (error) {
    console.log(error);
  }
};
export { nuevaTematica,tematicas };
