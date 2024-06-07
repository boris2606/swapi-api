import Starships from "../components/containers/starships/Starships";
import { dataStarships } from "../fetchData";

export async function generateMetadata({ params, searchParams }: any) {
    const starshipList = await dataStarships.getDataStarshipsAll();
    const nameStarship = starshipList?.map((starship: any) => starship.name);
    return {
        title: "Starships",
        description: nameStarship,
        keywords: nameStarship,
    };
}

export default async function People() {
    const starshipListAll = await dataStarships.getDataStarshipsAll();
    const countAllStarships = Math.ceil(starshipListAll.length / 10);
    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Starships countAllStarships={countAllStarships} />
        </section>
    );
}
