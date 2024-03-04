require('./connection');
const User = require('./models/collection1');
const Car = require('./models/collection2');

const createUserAndSearch = async () => {
    try {
        // Crear un usuario
        const user = new User({
            nombre: 'Mario',
            email: 'mario@gmail.com',
            edad: 21,
        });

        // Guardar el usuario en la base de datos
        await user.save();

        console.log('Usuario creado:', user);

        // Buscar el usuario recién creado
        const foundUser = await User.findOne({ nombre: 'Mario' });

        if (!foundUser) {
            console.log('Usuario no encontrado');
            return;
        }

        console.log('Usuario encontrado:', foundUser);

        // Ahora puedes buscar los coches asociados a este usuario
        const cars = await Car.find({ dueño: foundUser._id });
        console.log('Coches del usuario:', cars);
    } catch (error) {
        console.error('Error al crear o buscar usuario:', error);
    }
};

createUserAndSearch();
