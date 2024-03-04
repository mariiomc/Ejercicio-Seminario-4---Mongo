const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },
});

module.exports = model('usuario', usuarioSchema);
