const allData = require('./data.json');

const DataBase = {
    getAll: async () => {
        const asArray = Object.values(allData);
        await randomDelay();
        return asArray;
    },
    getByZipCode: async (zip) => {
        let zipResults
        const results = Object.values(allData);
        if (zip.length <= 3) {
            zipResults = results.filter((item) => {
                return item.zip.split("").slice(0, 3).join('') === zip
            });
        } else {
            zipResults = results.filter((item) => item.zip.includes(zip));
        }
        await randomDelay();
        return zipResults;

    },
    getByCity: async (city) => {
        const results = Object.values(allData);
        const cityResults = results.filter((item) => item.primary_city.includes(city));
        await randomDelay();
        return cityResults;
    },
    getByAdditional: async ({ type, state, country, timezone, areaCode, population }) => {
        if (type) {
            await randomDelay();
            return searchType(type)
        } else if (state) {
            await randomDelay();
            return searchState(state)
        } else if (country) {
            await randomDelay();
            return searchCountry(country)
        } else if (timezone) {
            await randomDelay();
            return searchTimeZone(timezone)
        } else if (areaCode) {
            await randomDelay();
            return searchAreaCode(areaCode)
        } else if (population) {
            await randomDelay();
            return searchPopulation(population)
        }
    }
}

const searchType = (type) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.type === type);
    return results;
}
const searchCountry = (country) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.country === country);
    return results;
}

const searchState = (state) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.state === state);
    return results;
}
const searchTimeZone = (timezone) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.timezone === timezone);
    return results;
}
const searchAreaCode = (areaCode) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.area_codes === areaCode);
    return results;
}

const searchPopulation = (population) => {
    const options = Object.values(allData);
    const results = options.filter((item) => item.estimated_population === population);
    return results;
}
const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(resolve, delay)
    })

module.exports = { DataBase }