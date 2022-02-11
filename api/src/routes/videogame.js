const axios = require('axios');
const { Router } = require('express');
const rutaVideogame = Router();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;



const obtieneJuegosBd = async () => {
    try {
        const juegosBd = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: { attributes: [] }
            }
        })
        return juegosBd
    } catch (error) {
        return error
    }
}

rutaVideogame.get("/:id", async (req, res) => {

    let { id } = req.params;
    typeof id !== "string" ? id = id.toString() : id;
    if (id.length > 10) {
        const arrBd = await obtieneJuegosBd()
        
        const juegoBd = arrBd.filter(e => e.id === id)
        juegoBd.length?
        res.status(200).json(...juegoBd):
        res.status(400).json('No se encuentra juego')
       
    } else {

        axios.get(`https://api.rawg.io/api/games/${id}${API_KEY}`)
            .then(response => {
                const juego = {
                    id: response.data.id,
                    name: response.data.name,
                    released: response.data.released,
                    image: response.data.background_image,
                    rating: response.data.rating,
                    platforms: response.data.platforms.map(e => e.platform.name),
                    genres: response.data.genres,
                    description: response.data.description,
                }
                res.status(200).json(juego)
            }
            )
            .catch(error => {
                res.status(500).json({ error: error })
            })
    }
});


module.exports = rutaVideogame;