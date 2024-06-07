import { API } from "./api";

const getDataSpeciesAll = async () => {
    let allSpecies = [];
    let nextPage = `${API}/species/`;
    while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allSpecies = [...allSpecies, ...data.results];
        nextPage = data.next;
    }
    return allSpecies;
};

const getDataSpeciesParams = async ({ page, name }) => {
    const res = await fetch(`${API}/species?page=${page}&search=${name}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataSpecie = async (query) => {
    const res = await fetch(`${API}/species?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataSpeciesAll, getDataSpeciesParams, getDataSpecie };
