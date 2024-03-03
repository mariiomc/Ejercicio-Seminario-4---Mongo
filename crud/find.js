const User = require('../models/collection1');
const Car = require('../models/collection2');

const searchProducts = async () => {
    const users = await User.find({});
    const cars = await Car.find({});

    console.log(users);
    console.log(cars);
};

searchProducts();