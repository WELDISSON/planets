require('dotenv').config();

const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const planetSchema = require('./schema');
const port = process.env.APP_PORT || '3001';
const url = `http://localhost:${port}`;
const planets = require('./planets.json');
describe('CRUD planet', () => {
    
    it('create planet return as expected', done => {
        var name = planets.results[0].name;
        var payload = {
            "name": name, 
            "climate": "temperate", 
            "terrain": "forests, mountains"
        }
        request(url)
        .post('/api/planets')
        .send(payload)
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
            console.log(err);
            if (err) return done(err);
            let actual = res.body; 
            err = Joi.validate(actual, planetSchema.getByIdSchemaS(),
                    { abortEarly: false}, ).error
            if (err !== null){
                    console.log(err.details);
            }
            assert.equal(err, null);
            done();
        });
    });
    it('request should return as expected ', done => {       
        request(url)
        .get('/api/planets/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);

            let actual = res.body; 
            err = Joi.validate(actual, planetSchema.getSchemaS(),
                    { abortEarly: false}, ).error
            if (err !== null){
                    console.log(err.details);
            }
            assert.equal(err, null);
	        done();
        });
    });
    it('request by id should return as expected', done => {       
        try {
            request(url)
            .get(`/api/planets/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                let userId = res.body.docs[0]._id;
                request(url)
                .get(`/api/planets/${userId}`)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    let actual = res.body; 
                    err = Joi.validate(actual, planetSchema.getByIdSchemaS(),
                            { abortEarly: false}, ).error
                    if (err !== null){
                        console.log(err.details);
                    }
                    assert.equal(err, null);
                    done();
                });
            });
        } catch (error) {
            return done(error);
        }
        
    });
    it('request by wrong id return error mensage', done => {
        let userId = '1234m';
        request(url)
        .get(`/api/planets/${userId}`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            if (err) return done(err);
            assert.equal(res.body, "Id not found");
            done();
        });
    });
    it('request by name should return as expected', done => {       
        try {
            request(url)
            .get(`/api/planets/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                let userName = res.body.docs[0].name;
                request(url)
                .get(`/api/planets/name/${userName}`)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    let actual = res.body; 
                    err = Joi.validate(actual, planetSchema.getByIdSchemaS(),
                            { abortEarly: false}, ).error
                    if (err !== null){
                        console.log(err.details);
                    }
                    assert.equal(err, null);
                    done();
                });
            });
        } catch (error) {
            return done(error);
        }
    });
    it('request by wrong name return null', done => {
        let user = 'a';
        request(url)
        .get(`/api/planets/name/${user}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            assert.equal(res.body, null);
            done();
        });
    });
    it('delete planet by id return as expected', done => {
        try {
            request(url)
            .get(`/api/planets/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                let userId = res.body.docs[0]._id;
                request(url)
                .delete(`/api/planets/${userId}`)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.body, "planet deleted!");
                    done();
                });
            });
        } catch (error) {
            return done(error);
        }        
    });
    it('delete planet by wrong id return error mensage', done => {
        let userId = '123123ad';
        request(url)
        .delete(`/api/planets/${userId}`)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            if (err) return done(err);
            assert.equal(res.body, "Planet not found");
            done();
        });
           
    });
});