const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    climate: {
        type: String,
        required: true,
    },
    terrain: {
        type: String,
        required: true,
    },
    numbersOfMovies: {
        type: Number,
        required: false,
    },
});
module.exports = planetSchema.plugin(mongoosePaginate), mongoose.model('Planet', planetSchema);
