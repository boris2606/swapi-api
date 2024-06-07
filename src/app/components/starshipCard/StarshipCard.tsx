"use client";

import Link from "next/link";
import React from "react";
import { customEncodeURIComponent } from "@/app/utils/utils";

const StarshipCard = ({ starship }: any) => {
    return (
        <Link href={`/starships/${customEncodeURIComponent(starship.name)}`}>
            <div className="flex justify-center items-center flex-col w-[500px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2">
                <p className="font-semibold text-xl">{starship?.name}</p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Model:
                    </span>
                    {starship?.model}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Passengers:
                    </span>
                    {starship?.passengers}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        crew:
                    </span>
                    {starship?.crew}
                </p>
            </div>
        </Link>
    );
};

export default StarshipCard;
