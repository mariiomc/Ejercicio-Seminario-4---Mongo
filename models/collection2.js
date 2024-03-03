import mongoose, { Schema, model, connect } from 'mongoose';
import { IUser } from '../Entrega_Seminario4/collection1';



const cocheSchema = new Schema({
  matricula: { type: String, required: true },
  añoComprado: { type: Number, required: true },
  dueño: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Car = model<ICar>('Car', cocheSchema);

async function run() {
  await connect('mongodb://localhost:27017');

  const car = new Car({
    matricula: '0948VBR',
    añoComprado: 2015,
    dueño: {
      nombre: 'Mario',
      email: 'mario@gmail.com',
      edad: 21,
    },
  });
  await car.save();

  console.log(car.matricula);
  console.log(car.añoComprado);
  console.log(car.dueño.nombre);
}

run().catch(err => console.log(err));
