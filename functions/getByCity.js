const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const city = event.queryStringParameters.city
        const cityResults = await DataBase.getByCity(city);
        console.log(cityResults)
        const length = cityResults.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'City match results', data: cityResults, length })
        }
    } catch (err) {
        console.log(err)
    }
};
