const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const genres = require('./genres');
const rutaVideogames = require('./videogames');
const rutaVideogame = require('./videogame');
const rutaVideogameSum = require('./videogameSum');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genres", genres)
router.use("/videogames", rutaVideogames);
router.use("/videogame", rutaVideogame);
router.use("/videogameSum", rutaVideogameSum);

module.exports = router;
