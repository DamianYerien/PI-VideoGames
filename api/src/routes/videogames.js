// // GET /videogames:
// // Obtener un listado de los videojuegos
// // Debe devolver solo los datos necesarios para la ruta principal

// // [ ] GET /videogames?name="...":
// // Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// // Si no existe ningún videojuego mostrar un mensaje adecuado

// const axios = require('axios')
// const {todosLosJuegos} = require('../funcionales/urlApi');


// var juegos = [];

// var resultadoApi = (pagina) => axios.get(`${todosLosJuegos}&page=${pagina}&page_size=40`)

// const obtieneJuegos = async () => {

//       await Promise.all([resultadoApi(1), resultadoApi(2), resultadoApi(3)])
//         .then(responses => {                    //responses [ [promesa1],[promesa2],[promesa3] ]
//             responses.forEach(response => 
//                 response.data.results.map(e => {    // response [{juego1},{juego2} ---> {juego40}]
//                     juegos.push({
//                         id: e.id,
//                         name: e.name,
//                         released: e.released,
//                         image: e.background_image,
//                         rating: e.rating,
//                         platforms: platforms.map(e => e.platform.name),
//                         genres: e.genres,
//                     })
//                 } )
//             )
            

//         })
//         .catch(error => {
//             return error
//         })

// return juegos.flat();  //juegos = [ {juego1}, {juego2} ---> {juego120} ]

// }




