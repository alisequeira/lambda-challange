const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const type = event.queryStringParameters.type;
        const state = event.queryStringParameters.state;
        const country = event.queryStringParameters.country;
        const timezone = event.queryStringParameters.timezone;
        const areaCode = event.queryStringParameters.areaCode;
        const population = event.queryStringParameters.population;
        const obj = {
            type,
            state,
            country,
            timezone,
            areaCode,
            population
        }

        const results = await DataBase.getByAdditional(obj);
        console.log(results)
        const length = results.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data success', data: results, length })
        }
    } catch (err) {
        console.log(err)
    }
};