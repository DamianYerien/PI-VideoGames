const axios = require('axios');
const { Router } = require('express');
const rutaVideogame = Router();
const { API_KEY } = process.env;

rutaVideogame.get("/:id", async (req, res) => {

    let { id } = req.params;
    typeof id !== "string" ? id = id.toString() : id;
    if (id.length > 10) {
        // let game = await response.data.find(videogame => videogame.id === id)
        // if (videogame) res.status(200).json(videogame)
        // else res.status(404).json({ message: "Videogame not found" })
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