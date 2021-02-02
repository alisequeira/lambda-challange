const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const longitude = event.queryStringParameters.lon;
        const latitude = event.queryStringParameters.lat;

        const nearest = await DataBase.getByLonAndLat(longitude, latitude);
        console.log(nearest)
        const length = nearest.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data success', data: nearest, length })
        }
    } catch (err) {
        console.log(err)
    }
};