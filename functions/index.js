import DB from '../database/db';

module.exports.handler = async (event, context) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    console.log(allEntries);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data success', data: allEntries, length: length })
    }
};