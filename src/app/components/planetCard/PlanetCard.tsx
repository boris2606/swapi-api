"use client";

import Link from "next/link";
import React from "react";
import { customEncodeURIComponent } from "@/app/utils/utils";

const PlanetCard = ({ planet }: any) => {
    return (
        <Link href={`/planets/${customEncodeURIComponent(planet.name)}`}>
            <div className="flex justify-center items-center flex-col w-[300px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2">
                <p className="font-semibold text-xl">{planet?.name}</p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Diameter:
                    </span>
                    {planet?.diameter}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Population:
                    </span>
                    {planet?.population}
                </p>
            </div>
        </Link>
    );
};

export default PlanetCard;
