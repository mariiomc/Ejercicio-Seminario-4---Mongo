const User = require('../models/collection1');
const Car = require('../models/collection2');
require('../connection')


const updateOne = async () => {
    const user = await User.findOneAndUpdate(
        { username: 'Mario' }, 
        { nombre: 'Alberto' },
        { new: true } 
    );
    console.log(user);
};

updateOne();
