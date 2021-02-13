const express = require("express");
const router = express.Router();
const { default: axios } = require('axios');

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get(`/cars`, (req, res, next) => {
    res.render("cars");
});

router.get(`/gif-info`, (req,res,next) => {

        axios
        .get(`https://api.giphy.com/v1/gifs/search?q=${req.query.gif}&api_key=${process.env.KEY_ID}&limit=7`)
        .then(allGif => {
            const gifs = allGif.data;
            console.log(gifs);
            res.render("cars-list", {gifs});
        })
        .catch(err => {
            console.log(`error getting car due to: ${err}`);
        });



});


module.exports = router;
