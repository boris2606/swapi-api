"use client";

import Link from "next/link";
import { useMemo } from "react";
import { SiWondersharefilmora } from "react-icons/si";
import { customEncodeURIComponent } from "@/app/utils/utils";

const Films = ({ films }: any) => {
    const sortedByEpisode = useMemo(
        () =>
            films.sort((a: any, b: any) =>
                a.episode_id > b.episode_id ? 1 : -1
            ),
        [films]
    );

    return (
        <div className=" w-full max-w-[1200px] m-auto">
            <h2 className=" font-semibold text-lightning-yellow-600 text-2xl uppercase text-center mb-5">
                Episodes
            </h2>
            <div className="flex flex-col gap-5">
                {sortedByEpisode?.map((film: any) => {
                    return (
                        <div
                            key={film?.episode_id}
                            className=" rounded-lg bg-lightning-yellow-500 bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 flex items-center justify-between gap-5"
                        >
                            <div className="flex gap-2 items-center">
                                <p className=" max-w-[100px] text-center w-full rounded-lg bg-black text-lightning-yellow-600 p-6 font-semibold text-2xl">
                                    E- {film?.episode_id}
                                </p>
                                <p className=" font-medium text-xl w-full">
                                    {film?.title}
                                </p>
                            </div>
                            <Link
                                href={`/films/${customEncodeURIComponent(
                                    film?.title
                                )}`}
                            >
                                <SiWondersharefilmora className=" text-5xl block h-[80px]  p-2 w-[80px] hover:text-white  transition-all duration-500" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Films;
