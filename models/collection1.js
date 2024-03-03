import mongoose, { Schema, model, connect } from 'mongoose';


const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },
});

const User = model<IUser>('User', usuarioSchema);

async function run() {
  await connect('mongodb://localhost:27017');

  const user = new User({
    nombre: 'Mario',
    email: 'mario@gmail.com',
    edad: 21,
  });
  await user.save();

  console.log(user.nombre);
  console.log(user.email);const Product = require('../models/Product');
  console.log(user.edad);
}

run().catch(err => console.log(err));
