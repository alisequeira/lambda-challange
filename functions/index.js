const { DataBase } = require('../database/db');


module.exports.handler = async (event, context) => {
    try {
        const allEntries = await DataBase.getAll();
        const length = allEntries.length;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'All Records Success', length: length, data: allEntries })
        }
    } catch (err) {
        console.log(err);
    }
};