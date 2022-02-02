const axios = require('axios');
const { Router } = require('express');
const videogames = Router();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;


const obtieneJuegosApi = async () => {
    const juegosApi = [];
    const consultaApi1 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=25&page_size=4`);
    const consultaApi2 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=26&page_size=4`);
    const consultaApi3 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=27&page_size=4`);
    const resultadoApi = [...consultaApi1.data.results, ...consultaApi2.data.results, ...consultaApi3.data.results]
    resultadoApi.forEach(resultado => {
        juegosApi.push(
            {
                id: resultado.id,
                name: resultado.name,
                released: resultado.released,
                image: resultado.background_image,
                rating: resultado.rating,
                platforms: resultado.platforms.map(e => e.platform.name),
                genres: resultado.genres
            })
    })

    return juegosApi;  //juegos = [ {juego1}, {juego2} ---> {juego120} ]

}


const obtieneJuegosBd = async () => {

    try {
        const juegosBd = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
        return juegosBd
    } catch (error) {
        return error
    }
}

const todosLosJuegos = async () => {
    try {
        const arrApi = await obtieneJuegosApi()
        const arrBd = await obtieneJuegosBd()
        return arrBd.concat(arrApi)
    } catch (error) {
        return error
    }
};

videogames.get("/", async (req, res) => {
    const { name } = req.query;
    const juegosTotal = await todosLosJuegos();

    if (name) {
        const juegosFiltrados = juegosTotal.filter(juego => {
            return juego.name.toLowerCase().includes(name.toLowerCase())
        })
        juegosFiltrados.length
            ? res.status(200).json(juegosFiltrados)
            : res.status(404).send([])
    } else {
        res.status(200).json(juegosTotal)
    }
})

module.exports = videogames;