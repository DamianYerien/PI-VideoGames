const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const genres = require('./genres');
const videogames = require('./videogames');
const videogame = require('./videogame');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genres", genres)
router.use("/videogames", videogames);
router.use("/videogame", videogame);

module.exports = router;
