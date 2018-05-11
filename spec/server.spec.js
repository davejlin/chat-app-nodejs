var request = require('request');

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2*2).toBe(4);
    });
});

describe('get messages', () => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('should return return non-empty list', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.body.length).toBeGreaterThan(0);
            done();
        });
    });
});

describe('get messages from user', () => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages/dave', (err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('name should be Dave', (done) => {
        request.get('http://localhost:3000/messages/Dave', (err, res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('Dave');
            done();
        });
    });
    it('name should be Clau', (done) => {
        request.get('http://localhost:3000/messages/Clau', (err, res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('Clau');
            done();
        });
    });
});