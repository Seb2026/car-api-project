const express = require("express");
const router = express.Router();
const { default: axios } = require('axios');

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get(`/cars`, (req, res, next) => {
    res.render("cars");
});

router.get(`/car-info`, (req,res,next) => {

        axios
        .get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${req.query.make}?format=json`)
        .then(allCars => {
            const cars = allCars.data;
            console.log(cars);
            res.render("cars-list", {cars});
        })
        .catch(err => {
            console.log(`error getting car due to: ${err}`);
        });



});


module.exports = router;
