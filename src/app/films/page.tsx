import { dataFilms } from "../fetchData/index";
import type { Metadata } from "next";
import FilmsList from "@/app/components/containers/films/Films";

export async function generateMetadata({ params, searchParams }: any) {
    const filmsList = await dataFilms.getDataFilms();
    const titlesFilms = filmsList?.map((film: any) => film.title);
    return {
        title: "Films",
        description: titlesFilms,
        keywords: titlesFilms,
    };
}

export default async function Films() {
    const filmsList = await dataFilms.getDataFilms();

    return (
        <div className=" h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <FilmsList films={filmsList} />;
        </div>
    );
}
