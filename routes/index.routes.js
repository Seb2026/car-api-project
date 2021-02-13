const express = require("express");
const router = express.Router();
const { default: axios } = require('axios');

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get(`/gif`, (req, res, next) => {
    res.render("gif-search");
});

router.get(`/gif-info`, (req,res,next) => {

        axios
        .get(`https://api.giphy.com/v1/gifs/search?q=${req.query.gif}&api_key=${process.env.KEY_ID}&limit=7`)
        .then(allGif => {
            const gifs = allGif.data;
            console.log(gifs);
            res.render("gif-list", {gifs});
        })
        .catch(err => {
            console.log(`error getting gifs due to: ${err}`);
        });



});


router.get(`/random-gif`, (req,res,next) => {
    axios
    .get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.KEY_ID}&limit=1`)
    .then(randomGif => {
        const random = randomGif.data;
        res.render("gif-list", { random });
    })
    .catch(err => {
        console.log(`error getting random gif due to: ${err}`);
    });
});

module.exports = router;
