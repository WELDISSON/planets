require('dotenv').config();
const express = require('express');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDatabase = require('./db');
const log = require('knoblr');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

requireDir('./src/models');

app.use('/api', require('./src/routes'));

const main = async () => {
    try {
        await connectDatabase();
        app.listen( process.env.APP_PORT || 3001, () => {
            if( process.env.APP_PORT === undefined){
                log.warn(`running in port 3001`);
            }else{
                log.warn(`running in port ${process.env.APP_PORT}`);
            }
        });  
    } catch (err) {
        log.error(err);
    }
};
main();
