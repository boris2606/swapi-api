import Specie from "@/app/components/containers/species/Specie/Specie";
import { dataSpecies } from "@/app/fetchData/";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const species = await dataSpecies.getDataSpeciesAll();
    return species.map((specie: { name: string }) => ({
        specieName: customEncodeURIComponent(specie.name),
    }));
}

export async function generateMetadata({ params }: any) {
    const specie = await dataSpecies.getDataSpecie(
        customDecodeURIComponent(params?.specieName)
    );

    const currentSpecie = specie[0];

    return {
        title: currentSpecie?.name,
        description: `${currentSpecie?.name} ${currentSpecie?.average_height} ${currentSpecie?.average_lifespan} ${currentSpecie?.classification} ${currentSpecie?.designation} ${currentSpecie?.eye_colors} ${currentSpecie?.hair_colors} ${currentSpecie?.language} ${currentSpecie?.skin_colors} `,
    };
}

export default async function CurrentSpecie({ params: { specieName } }: any) {
    const specieData = await dataSpecies.getDataSpecie(
        customDecodeURIComponent(specieName)
    );

    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Specie specieData={specieData} />
        </section>
    );
}
