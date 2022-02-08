const axios = require('axios');
const { Router } = require('express');
const rutaVideogames = Router();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

const obtieneJuegosApi = async () => {
    const juegosApi = [];
    try {
        const consultaApi1 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=3&page_size=4`);
        const consultaApi2 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=4&page_size=4`);
        const consultaApi3 = await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=5&page_size=4`);
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
    } catch (error) {
        return error
    }
}

const obtieneJuegosBd = async () => {
    try {
        const juegosBd = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: {attributes: []}
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
        return [...arrBd, ...arrApi]
    } catch (error) {
        return error
    }
};

rutaVideogames.get("/", async (req, res) => {
    const { name } = req.query;
    const juegosTotal = await todosLosJuegos();
    if (name) {
        const juegosFiltrados = juegosTotal.filter(juego => {
            return juego.name.toLowerCase().includes(name.toLowerCase())
        })
        juegosFiltrados.length
            ? res.status(200).json(juegosFiltrados)
            : res.status(404).send('OMG !!! No existe ese juego')
    } else {
        res.status(200).json(juegosTotal)
    }
})

module.exports = rutaVideogames;