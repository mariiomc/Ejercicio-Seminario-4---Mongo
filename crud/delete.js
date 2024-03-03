const User = require('../models/collection1');
const Car = require('../models/collection2');

const someFunction = async () => {
    const user = await User.findOne({ nombre: 'Isidoro' });

    if (!user) {
        console.log('Usuario no encontrado');
        return;
    }

    const result = await Car.deleteOne({ dueño: user._id });
    console.log(result);
};

someFunction().catch(err => console.error(err));
