import { dataStarships } from "@/app/fetchData/";
import Starship from "@/app/components/containers/starships/Starship/Starship";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const starships = await dataStarships.getDataStarshipsAll();
    return starships.map((starship: { name: string }) => ({
        starshipName: customEncodeURIComponent(starship.name),
    }));
}

export async function generateMetadata({ params }: any) {
    const starship = await dataStarships.getDataStarship(
        customDecodeURIComponent(params?.starshipName)
    );
    const currentStarship = starship[0];

    return {
        title: currentStarship?.name,
        description: `${currentStarship.name} ${currentStarship.model}  ${currentStarship.starship_class} ${currentStarship.manufacturer} ${currentStarship.hyperdrive_rating}`,
    };
}

export default async function CurrentStarship({
    params: { starshipName },
}: any) {
    const starshipData = await dataStarships.getDataStarship(
        customDecodeURIComponent(starshipName)
    );

    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Starship starshipData={starshipData} />
        </section>
    );
}
