const Joi = require('joi')

getSchemaS = () => {
  let schema = Joi.object().keys({
    docs: Joi.array().items(Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string().required(),
        numbersOfMovies: Joi.number().integer().min(0).required(),
        terrain: Joi.string().required(),
        climate: Joi.string().required(),
        __v: Joi.number().min(0).max(0).required()
    })),
    total : Joi.number().integer().min(0).required(),
    limit: Joi.number().integer().min(0).required(),
    page: Joi.number().integer().min(0).required(),
    pages: Joi.number().integer().min(0).required(),

  })
  return schema
}
getByIdSchemaS = () => {
  var schema = Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    numbersOfMovies: Joi.number().integer().min(0).required(),
    terrain: Joi.string().required(),
    climate: Joi.string().required(),
    __v: Joi.number().min(0).max(0).required()
  });
  return schema;
}
module.exports = {
    getSchemaS, getByIdSchemaS
}