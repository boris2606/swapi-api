import Planets from "../components/containers/planets/Planets";
import { dataPlanets } from "../fetchData";

export async function generateMetadata({ params, searchParams }: any) {
    const planetsList = await dataPlanets.getDataPlanetsAll();
    const namePlanet = planetsList?.map((planet: any) => planet.name);
    return {
        title: "Planets",
        description: namePlanet,
        keywords: namePlanet,
    };
}

export default async function People() {
    const resulPlanetsAll = await dataPlanets.getDataPlanetsAll();
    const countAllPlanets = Math.ceil(resulPlanetsAll.length / 10);
    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Planets countAllPlanets={countAllPlanets} />
        </section>
    );
}
