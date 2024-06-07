import { API } from "./api";

const getDataVehiclesAll = async () => {
    let allVehicles = [];
    let nextPage = `${API}/vehicles/`;
    while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allVehicles = [...allVehicles, ...data.results];
        nextPage = data.next;
    }
    return allVehicles;
};

const getDataVehiclesParams = async ({ page, name, model }) => {
    const res = await fetch(
        `${API}/vehicles?page=${page}&search=${name || model}`
    );
    const data = await res.json();
    const { results } = data;
    return results;
};

const getDataVehicle = async (query) => {
    const res = await fetch(`${API}/vehicles?search=${query}`);
    const data = await res.json();
    const { results } = data;
    return results;
};

export { getDataVehiclesAll, getDataVehiclesParams, getDataVehicle };
