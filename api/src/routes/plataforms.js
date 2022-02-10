// const axios = require('axios');
// const { Router } = require('express');
// const rutaPlataformas = Router();
// const { API_KEY } = process.env;

// rutaPlataformas.get("/", async (req, res) => {

//     try {
//         const consultaApi1 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=3&page_size=40`);
//         const consultaApi2 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=4&page_size=40`);
//         const consultaApi3 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=5&page_size=40`);
//         const resultadoApi = [...consultaApi1.data.results, ...consultaApi2.data.results, ...consultaApi3.data.results]
//         const allPlatforms = [];
//         resultadoApi.map(game => {
//             game.platforms.map(platform => {
//                 if (!allPlatforms.includes(platform.platform.name)) {
//                     allPlatforms.push(platform.platform.name)
//                 }
//             })

//         })
//         res.status(200).json(allPlatforms)
//     }
//     catch (error) {
//         res.status(500).json({
//             message: "Error getting all platforms",
//             error: err
//         })
//     };
// })



// module.exports = rutaPlataformas;