const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const videogamesRouter = require('./videogames');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter)

module.exports = router;
