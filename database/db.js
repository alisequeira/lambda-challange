import allData from './data.json';

class DataBase {
    constructor() { }

    async getAll() {
        const asArray = Object.values(allData);
        await randomDelay();
        return asArray;
    }

    async getByZipCode(zip) {
        const results = Object.values(allData);
        const zipResults = results.filter((item) => {
            return item.zip.includes(zip)
        })
        await randomDelay();
        return zipResults;
    }

}

const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(resolve, delay)
    })