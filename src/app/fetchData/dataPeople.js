import { API } from "../fetchData/api";

const getDataPeoplesAll = async () => {
    let allPeople = [];
    let nextPage = `${API}/people/`;
    while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allPeople = [...allPeople, ...data.results];
        nextPage = data.next;
    }
    return allPeople;
};

const getDataPeopleParams = async ({ page, name }) => {
    const res = await fetch(`${API}/people?page=${page}&search=${name}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataPeople = async (query) => {
    const res = await fetch(`${API}/people?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataPeople, getDataPeoplesAll, getDataPeopleParams };
