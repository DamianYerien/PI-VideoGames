const { Router } = require('express');
const rutaVideogameSum = Router();
const { Videogame, Genre } = require('../db');



rutaVideogameSum.post("/", (req, res) => {
    let { name, image, description, released, rating, genres, platforms, createdInDb } = req.body;
    name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1)
    Videogame.create({
        name,
        image,
        description,
        released,
        rating,
        platforms,
        createdInDb
    })
        .then(videojuego => {
            Genre.findAll({
                where: { name: genres }
            })
                .then(genres => {
                    videojuego.addGenres(genres)
                        .then(() => {
                            res.status(201).json(videojuego)
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

module.exports = rutaVideogameSum;