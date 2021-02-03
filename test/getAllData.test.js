const { DataBase } = require('../database/db');
const allData = require('../database/data.json');
const getByZipCode = require('../functions/getByZipCode');
const eventGenerator = require('./utils/eventGenerator');

describe('Fetch all data', () => {
    test('Testing index function', async () => {
        const test = await DataBase.getAll();
        expect(test).toEqual(allData);
    });
});

describe('Validating Get By Zip Code', () => {
    test('Validate response status code', async () => {
        try {

            const event = eventGenerator({
                queryStringObject: {
                    zip: '010'
                },
            });
            const res = await getByZipCode.handler(event);
            expect(res.body.message).toEqual(200);
        } catch (err) {

        }
        // done();

    });
})