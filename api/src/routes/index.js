const { Router } = require('express');
const router = Router();


const genres = require('./genres');
const rutaVideogames = require('./videogames');
const rutaVideogame = require('./videogame');
const rutaVideogameSum = require('./videogameSum');




router.use("/genres", genres)
router.use("/videogames", rutaVideogames);
router.use("/videogame", rutaVideogame);
router.use("/videogameSum", rutaVideogameSum);

module.exports = router;
