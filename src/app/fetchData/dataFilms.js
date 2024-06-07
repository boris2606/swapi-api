import { API } from "../fetchData/api";

const getDataFilms = async () => {
    const res = await fetch(`${API}/films`);
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataFilm = async (query) => {
    const res = await fetch(`${API}/films?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataFilm, getDataFilms };
