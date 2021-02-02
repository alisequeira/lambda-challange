const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const city = event.queryStringParameters.city
        const cityResults = await DataBase.getByZipCode(city);
        console.log(cityResults)
        const length = zipResults.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data success', data: cityResults, length })
        }
    } catch (err) {
        console.log(err)
    }
};
