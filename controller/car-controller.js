const CarModel = require('../model/all-car');

const getAllCars = (req , res ,next) => {
    res.json(CarModel);
    res.end();
};



exports.GetAllCats = getAllCars;