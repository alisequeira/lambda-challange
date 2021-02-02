const { DataBase } = require('../database/db');


module.exports.handler = async (event, context, next) => {
    try {
        const allEntries = await DataBase.getAll();
        const length = allEntries.length;
        console.log(allEntries);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data success', data: allEntries, length: length })
        }
    } catch (err) {
        console.log(err);
    }
};