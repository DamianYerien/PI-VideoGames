const axios = require('axios');
const { Router } = require('express');
const rutaVideogame = Router();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

rutaVideogame.get("/:id", async (req, res) => {
    let { id } = req.params;
    if (typeof id !== "string") id = id.toString();
    axios.get(`https://api.rawg.io/api/games/${id}${API_KEY}`)
        .then(response => {
            const juego = {
                id: response.data.id,
                name: response.data.name,
                released: response.data.released,
                image: response.data.background_image,
                rating: response.data.rating,
                platforms: response.data.platforms.map(e => e.platform.name),
                genres: response.data.genres
            }
            res.status(200).json(juego)
        }
        )
        .catch(error => {
            res.status(500).json({ error: error })
        })
});

rutaVideogame.post("/", (req, res) => {
    let { name, image, description, released, rating, genres, platforms, createdInDb } = req.body;
    Videogame.create({
        name,
        image,
        description,
        released,
        rating,
        platforms,
        createdInDb
    })
        .then(videogame => {
            Genre.findAll({
                where: { name: genres }
            })
                .then(genres => {
                    videogame.addGenres(genres)
                        .then(() => {
                            res.status(201).json(videogame)
                        })
                        .catch(error => {
                            res.status(500).json({ error })
                        })
                })
                .catch(error => {
                    res.status(500).json({ error: error })
                })
        })
        .catch(error => res.status(501).json({ message: "Internal server error", error }))
})





module.exports = rutaVideogame;