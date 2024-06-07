import { dataPeople } from "@/app/fetchData/";
import People from "../page";
import CurrentPeople from "@/app/components/containers/peoples/currentPeople/CurrentPeople";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const people = await dataPeople.getDataPeoplesAll();
    return people.map((people: { name: string }) => ({
        peopleName: customEncodeURIComponent(people.name),
    }));
}

export async function generateMetadata({ params }: any) {
    const people = await dataPeople.getDataPeople(
        customDecodeURIComponent(params?.peopleName)
    );

    return {
        title: people[0]?.name,
        description: `${people[0]?.name} ${people[0]?.birth_year} ${people[0]?.eye_color} ${people[0]?.mass} ${people[0]?.height} ${people[0]?.skin_color}`,
    };
}

export default async function CurrentPeopleFunc({
    params: { peopleName },
}: any) {
    const decodedPeopleName = customDecodeURIComponent(peopleName);
    const peopleData = await dataPeople.getDataPeople(decodedPeopleName);

    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <CurrentPeople peopleData={peopleData} />
        </section>
    );
}
