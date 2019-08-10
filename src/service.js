const axios = require('axios');
const log = require('knoblr');

const getMovieDetails= async (planet) => {
    let planetUrl = `https://swapi.co/api/planets?search=${planet.name}`;
    try{
        var response = await axios.get(planetUrl)

    }catch(err){
        log.error(err);
        err.status === 404;
        return ('https://swapi.co not avaliable!');
    }
    if(response.data.count > 0) {
        planet.numbersOfMovies = response.data.results[0].films.length;
        return planet;      
    } else {
        return('Planet is not valid!');
    }
}
module.exports = { getMovieDetails };