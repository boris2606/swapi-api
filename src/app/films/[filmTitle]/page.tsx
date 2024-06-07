import { dataFilms } from "@/app/fetchData";
import Film from "@/app/components/containers/films/film/Film";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const films = await dataFilms.getDataFilms();
    return films.map((film: { title: string }) => ({
        filmTitle: customEncodeURIComponent(film.title),
    }));
}

export async function generateMetadata({ params }: any) {
    const film = await dataFilms.getDataFilm(
        customDecodeURIComponent(params?.id)
    );
    return {
        title: film?.title,
        description: film?.opening_crawl,
    };
}

export default async function CurrentFilm({ params: { filmTitle } }: any) {
    const filmData = await dataFilms.getDataFilm(
        customDecodeURIComponent(filmTitle)
    );

    return <Film film={filmData} />;
}
