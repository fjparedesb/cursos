const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {

    describe('GET /', () => {
        it('should return hola mundo', (done) =>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should exist user Javier', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'Javier', age: 41});
                })
                .end(done);
        });
    });
});



