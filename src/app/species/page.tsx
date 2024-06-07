import Peoples from "../components/containers/peoples/Peoples";
import Species from "../components/containers/species/Species";
import { dataSpecies } from "../fetchData";

export async function generateMetadata({ params, searchParams }: any) {
    const speciesList = await dataSpecies.getDataSpeciesAll();
    const nameSpecies = speciesList?.map((specie: any) => specie.name);
    return {
        title: "Species",
        description: nameSpecies,
        keywords: nameSpecies,
    };
}

export default async function People() {
    const resulSpeciesAll = await dataSpecies.getDataSpeciesAll();
    const countAllSpecies = Math.ceil(resulSpeciesAll.length / 10);
    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Species countAllSpecies={countAllSpecies} />
        </section>
    );
}
