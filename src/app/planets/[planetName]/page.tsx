import { dataPlanets } from "@/app/fetchData/";
import Planet from "@/app/components/containers/planets/Planet/Planet";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const planets = await dataPlanets.getDataPlanetsAll();
    return planets.map((planet: { name: string }) => ({
        planetName: customEncodeURIComponent(planet.name),
    }));
}

export async function generateMetadata({ params }: any) {
    const planet = await dataPlanets.getDataPlanet(
        customDecodeURIComponent(params?.planetName)
    );

    const currentPlanet = planet[0];

    return {
        title: currentPlanet?.name,
        description: `${currentPlanet.name} ${currentPlanet.climate} ${currentPlanet.diameter} ${currentPlanet.gravity} ${currentPlanet.orbital_period} ${currentPlanet.population} ${currentPlanet.rotation_period} ${currentPlanet.terrain} `,
    };
}

export default async function CurrentPlanet({ params: { planetName } }: any) {
    const planetData = await dataPlanets.getDataPlanet(
        customDecodeURIComponent(planetName)
    );

    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Planet planetData={planetData} />
        </section>
    );
}
