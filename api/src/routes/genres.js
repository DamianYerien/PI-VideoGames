const { Router } = require('express');
const genres = Router();
const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;


const obtieneGeneros = async () => {
    const consultaApi = await axios.get(`https://api.rawg.io/api/genres${API_KEY}`);
    return consultaApi
}
var todosLosGeneros = [];    //PARA NICO : GENERO SERIA COMO TEMPERAMENTO PARA VOS

genres.get("/", async (req, res) => {      
    let dataGeneros = await obtieneGeneros(); //OBTENGO UN OBJETO DE MI API
    let arrGeneros = dataGeneros.data.results; //EXTRAIGO EL ARRAI CON LOS GENEROS DE LA API 

    arrGeneros.forEach(resultado => {
        todosLosGeneros.push(resultado.name) //RECORRO EL ARRAY Y PUSHEO SOLO EL NOMBRE DEL GENERO A UN 
    })                                          //ARRAY RESULTANTE

    todosLosGeneros.forEach(genreApi => {
        Genre.findOrCreate({
            where: { name: genreApi  } //LE DIGO QUE BUSQUE O CREE EN LA BD GENRE LOS GENERO
        })                            // SI ESTAN REPETIDOS SOLO CREA 1
    })

    return Genre.findAll()   // le pido que devuelva los que estan cargados en la BD, no los de la api

        .then(resBD => {
            res.status(200).json(resBD)
        })
        .catch(error => {
            res.status(404).json(error)
        })
})



module.exports = genres;