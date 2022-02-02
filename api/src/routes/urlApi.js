const { API_KEY } = process.env;


const consultatodosLosJuegos = `https://api.rawg.io/api/games${API_KEY}`
// const soloUnNombre = `https://api.rawg.io/api/games?search=${game}${API_KEY}`
 const soloGeneros = `https://api.rawg.io/api/genres${API_KEY}`
// const soloUnId = `https://api.rawg.io/api/games/${id}${API_KEY}`


module.exports = {
    consultatodosLosJuegos,
    soloGeneros
   
}