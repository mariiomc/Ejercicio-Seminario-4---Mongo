const User = require('../models/collection1');
const Car = require('../models/collection2');

const someFunction = async () => {
    const user = await User.findOneAndUpdate(
        { username: 'Mario' }, 
        { nombre: 'Alberto' },
        { new: true } 
    );
    console.log(user);
};

someFunction().catch(err => console.error(err));
