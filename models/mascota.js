const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

// Crear modelo
const Mascota = mongoose.model("Mascota", mascotaSchema);
// exportamos el modulo para que pueda
module.exports = Mascota;
