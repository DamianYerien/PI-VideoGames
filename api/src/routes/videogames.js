// GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal

// [ ] GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

const axios = require('axios');
//const {consultatodosLosJuegos} = require('./urlApi');
const { Router } = require('express');
const videogamesRouter = Router();

//https://api.rawg.io/api/games?key=8c3e5f3fed1d46f2aea94f990bd36061
//https://api.rawg.io/api/games?key=8c3e5f3fed1d46f2aea94f990bd36061&page=${pagina}&page_size=40


const obtieneJuegosApi = async () => {
    const juegosApi = [];
     const consultaApi = await axios.get(`https://api.rawg.io/api/games?key=8c3e5f3fed1d46f2aea94f990bd36061&page=3&page_size=4`);
    for (let i = 0; i < consultaApi.data.results.length; i++) {
       var arrApi = consultaApi.data.results; 
        juegosApi.push(
            {
                id: arrApi[i].id,
                name: arrApi[i].name,
                released: arrApi[i].released,
                image: arrApi[i].image,
                rating: arrApi[i].rating,
                platforms: arrApi[i].platforms.map(e => e.platform.name),
                genres: arrApi[i].genres}
        )
        
    }
    
    
    //  var resultado = [{
    //     id: consultaApi.data.results[0].id,
    //     name: consultaApi.data.results[0].name,
    //     released: consultaApi.data.results[0].released,
    //     image: consultaApi.data.results[0].image,
    //     rating: consultaApi.data.results[0].rating,
    //     platforms: consultaApi.data.results[0].platforms.map(e => e.platform.name),
    //     genres: consultaApi.data.results[0].genres}, 
        
    //                         {id: consultaApi.data.results[1].id,
    //                         name: consultaApi.data.results[1].name,
    //                         released: consultaApi.data.results[1].released,
    //                         image: consultaApi.data.results[1].image,
    //                         rating: consultaApi.data.results[1].rating,
    //                         platforms: consultaApi.data.results[1].platforms.map(e => e.platform.name),
    //                         genres: consultaApi.data.results[1].genres}]
    //                     })
    //                 })
    // var consultaApi = () => axios.get(`https://api.rawg.io/api/games?key=8c3e5f3fed1d46f2aea94f990bd36061&page=3&page_size=40`)

    //   await Promise.all([consultaApi(1), consultaApi(2), consultaApi(3)])
    //     .then(responses => {                    //responses [ [promesa1],[promesa2],[promesa3] ]
    //         responses.forEach(response => 
    //             response.data.results.map(e => {    // response [{juego1},{juego2} ---> {juego40}]
    //                 juegosApi.push({
    //                     id: e.id,
    //                     name: e.name,
    //                     released: e.released,
    //                     image: e.background_image,
    //                     rating: e.rating,
    //                     platforms: platforms.map(e => e.platform.name),
    //                     genres: e.genres,
    //                 })
    //             } )
    //         )
            

    //     })
    //     .catch(error => {
    //         return error
    //     })

//return juegosApi.flat();  //juegos = [ {juego1}, {juego2} ---> {juego120} ]
//await 1+2;
return juegosApi
}


// const obtieneJuegosBd = async () =>{

//     try {
//         const juegosBd = await Videogame.findAll({
//             include: {
//                 model: Genre,
//                 attributes: ["name"],
//                 through: {
//                     attributes: [],
//                 }
//             }
//         })
//         return juegosBd
//     } catch (error) {
//         return error
//     }
// }

const todosLosJuegos = async () => {
    try {
        const arrApi = await obtieneJuegosApi()
        //const arrBd = await obtieneJuegosBd()
        return arrApi //.concat(arrBd)
    } catch (error) {
        return error
    }
};

videogamesRouter.get("/", async (req, res) => {
    const {name} = req.query;
    const allGames = await todosLosJuegos();

    if (name) {
        const filteredGames = allGames.filter(game => {
            return game.name.toLowerCase().includes(name.toLowerCase())
        })
        filteredGames.length
            ? res.status(200).json(filteredGames)
            : res.status(404).send([])
    } else {
        res.status(200).json(allGames)
    }
})

module.exports = videogamesRouter;