import { API } from "../fetchData/api";

const getDataStarshipsAll = async () => {
    let allStarships = [];
    let nextPage = `${API}/starships/`;
    while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allStarships = [...allStarships, ...data.results];
        nextPage = data.next;
    }
    return allStarships;
};

const getDataStarshipsParams = async ({ page, name, model }) => {
    const res = await fetch(
        `${API}/starships?page=${page}&search=${name || model}`
    );
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataStarship = async (query) => {
    const res = await fetch(`${API}/starships?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataStarshipsAll, getDataStarshipsParams, getDataStarship };
