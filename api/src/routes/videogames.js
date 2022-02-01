// GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal

// [ ] GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

const axios = require('axios')
const {todosLosJuegos} = require('../funcionales/urlApi');

const obtieneJuegos = async (req) => {

    var resultadoApi = await axios.get(`${todosLosJuegos}&page_size=40`)

    var juegos = [];


    resultadoApi.data.results.map(e => {
        games.push({
            id: e.id,
            name: e.name,
            released: e.released,
            image: e.background_image,
            rating: e.rating,
            platforms: e.parent_platforms,
            genres: e.genres,
        })
    }

    )
return juegos;

}
const obtieneJuegosUrl = obtieneJuegos();
module.exports = obtieneJuegosUrl;





