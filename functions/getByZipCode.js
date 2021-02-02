const { DataBase } = require('../database/db');

module.exports.handler = async event => {
    try {
        const { zip } = JSON.parse(event.body)
        const zipResults = DataBase.getByZipCode(zip);
        const length = zipResults.length;
        return {
            statusCode = 200,
            body: JSON.stringify({ data: zipResults, length })
        }
    } catch (err) {
        console.log(err)
    }
};
