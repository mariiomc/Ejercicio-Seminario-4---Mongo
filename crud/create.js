const User = require('../models/collection1');
const Car = require('../models/collection2');

const someFunction = async () => {
    const user1 = new User({
        nombre: 'Juan',
        email: 'juan@gmail.com',
        edad: 85,
    });
    await user1.save();

    const car1 = new Car({
        matricula: '1111BCD',
        añoComprado: 2024,
        dueño: user1, 
    });
    await car1.save();
};

someFunction().catch(err => console.error(err));
