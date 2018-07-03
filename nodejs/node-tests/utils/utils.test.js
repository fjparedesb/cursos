const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33,11);
    
        expect(res).toBe(44).toBeA('number');
        
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square a number', () => {
        var res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(3, (sqr) => {
            expect(sqr).toBe(9).toBeA('number');
            done();
        });
    });
    
    it('should verify first and last names are set', () => {
        var user = {location: 'Mexico', age: '41'};
        var res = utils.setName(user, 'Javier Paredes');
    
        expect(res).toInclude({
            firstName: 'Javier', 
            lastName: 'Paredes'});
    });
});
