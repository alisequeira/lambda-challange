const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const zip = event.queryStringParameters.zip
        const zipResults = await DataBase.getByZipCode(zip);
        const length = zipResults.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Zip Code match ', length, data: zipResults })
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.log(err)
    }
};
