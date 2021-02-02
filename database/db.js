const allData = require('./data.json');

const DataBase = {
    // constructor() { }

    getAll: async () => {
        const asArray = Object.values(allData);
        await randomDelay();
        return asArray;
    },
    getByZipCode: async (zip) => {

        const results = Object.values(allData);
        const zipResults = results.filter((item) => item.zip.includes(zip))
        return zipResults;
    }

    // await randomDelay();
    // return zipResults;
}

// return {
//     getAll,
//     getByZipCode
// }



const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(resolve, delay)
    })

module.exports = { DataBase }