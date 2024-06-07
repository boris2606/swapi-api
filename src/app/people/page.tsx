import Peoples from "../components/containers/peoples/Peoples";
import { dataPeople } from "../fetchData";

export async function generateMetadata({ params, searchParams }: any) {
    const peopleList = await dataPeople.getDataPeoplesAll();
    const namePeople = peopleList?.map((people: any) => people.name);
    return {
        title: "People",
        description: namePeople,
        keywords: namePeople,
    };
}

export default async function People() {
    const resulPeopleAll = await dataPeople.getDataPeoplesAll();
    const countAllPeoples = Math.ceil(resulPeopleAll.length / 10);
    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Peoples countAllPeoples={countAllPeoples} />;
        </section>
    );
}
