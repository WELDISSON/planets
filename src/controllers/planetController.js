const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');
const service = require('./../service');
const log = require('knoblr');

module.exports = {
    async index(req, res){
        try {
            const { page = 1 } = req.query;
            const planets = await Planet.paginate({}, { page, limit: 10 } );
            log.info(`find all Planets:  \n${planets}`);
            return res.status(200).json(planets);

        } catch (err) {
            log.error(err);
            return res.status(500).json(`Internal Server Error`);
            
        }
    },
    async findForId(req, res){
        try{
            const planets = await Planet.findById(req.params.id);
            log.info(`find by id: \n${planets}`);
            return res.status(200).json(planets);
        }catch(err) {
            if (err.name === 'CastError') {
                log.error(`ID Not found: \n${err}`);
                return res.status(404).json(`Id not found`);
            } else {
                log.error(err);
                return res.status(500).json(`Internal Server Error`);
            }
        }
    },
    async findForName(req, res){
        try{
            const planets = await Planet.findOne({ name: req.params.name });
            log.info(`find by name: \n${planets}`);
            return res.status(200).json(planets);
        }catch(err) {
            log.error(err);
            return res.status(500).json(`Internal Server Error`);
        }
    },
    async create(req, res){
        try {
            const movieDetails = await service.getMovieDetails(req.body);
            
            if ( movieDetails === req.body){
                const planet = await Planet.create(req.body);
                log.info(`Create Planet: \n${planet}`);
                return res.json(planet);
            }else {
                log.error(`planet not found`);
                return res.status(404).json(`planet not found`);
            }
        } catch(err) {
            if (err.code === 11000) {
                log.error(`Error - already registered: \n${err}`);
                return res.status(400).json(`Planet already registered`);

            } else {
                log.error(err);
                return res.status(500).json(`Internal Server Error`);
            }
            
        }
    },
    async destroy(req, res){
        try {
            await Planet.findByIdAndDelete(req.params.id);
            log.info(`Planet ${req.params.id} deleted!`);
            return res.status(200).json(`planet deleted!`);
        }catch(err) {
            log.error(`Error to destroy planet: \n${err}`);
            return res.status(400).json(`Planet not found`);
        }
    }
}