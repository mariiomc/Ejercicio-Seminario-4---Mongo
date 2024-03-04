const { Schema, model } = require('mongoose');
const IUser = require('./collection1'); // Ruta relativa al archivo actual

const cocheSchema = new Schema({
  matricula: { type: String, required: true },
  añoComprado: { type: Number, required: true },
  dueño: { type: Schema.Types.ObjectId, ref: 'IUser', required: true }, // Referencia al modelo IUser
});

module.exports = model('coche', cocheSchema);
