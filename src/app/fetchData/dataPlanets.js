import { API } from "./api";

const getDataPlanetsAll = async () => {
    let allPlanets = [];
    let nextPage = `${API}/planets/`;
    while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allPlanets = [...allPlanets, ...data.results];
        nextPage = data.next;
    }
    return allPlanets;
};

const getDataPlanetsParams = async ({ page, name }) => {
    const res = await fetch(`${API}/planets?page=${page}&search=${name}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataPlanet = async (query) => {
    const res = await fetch(`${API}/planets?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataPlanetsAll, getDataPlanetsParams, getDataPlanet };
