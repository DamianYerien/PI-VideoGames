const { Router } = require('express');
const genres = Router();
const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;


const obtieneGeneros = async () => {
    const consultaApi = await axios.get(`https://api.rawg.io/api/genres${API_KEY}`);
    return consultaApi
}
var todosLosGeneros = [];    

genres.get("/", async (req, res) => {      
    let dataGeneros = await obtieneGeneros(); 
    let arrGeneros = dataGeneros.data.results;  

    arrGeneros.forEach(resultado => {
        todosLosGeneros.push(resultado.name) 
    })                                          

    todosLosGeneros.forEach(genreApi => {
        Genre.findOrCreate({
            where: { name: genreApi  } 
        })                            
    })

    return Genre.findAll()   

        .then(resBD => {
            res.status(200).json(resBD)
        })
        .catch(error => {
            res.status(404).json(error)
        })
})



module.exports = genres;