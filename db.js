require('dotenv').config();
const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_HOST } = process.env;
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const log = require('knoblr');

module.exports = () => new Promise((resolve, reject) => {
    mongoose.connect(url, {useNewUrlParser: true});
    mongoose.set('useCreateIndex', true);

    mongoose.connection.on('error', () => {
      log.error('Erro na conexão com o banco de dados');
      reject(mongoose.connection);
    });

    mongoose.connection.once('open', () => {
      log.warn('Aplicação conectada ao banco de dados');
      resolve(mongoose.connection);
    });

});

