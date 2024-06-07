"use client";

import Link from "next/link";
import React from "react";
import { customEncodeURIComponent } from "@/app/utils/utils";

const SpecieCard = ({ specie }: any) => {
    return (
        <Link href={`/species/${customEncodeURIComponent(specie.name)}`}>
            <div className="flex justify-center items-center flex-col w-[300px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2">
                <p className="font-semibold text-xl">{specie?.name}</p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Classification:
                    </span>
                    {specie?.classification}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Language:
                    </span>
                    {specie?.language}
                </p>
            </div>
        </Link>
    );
};

export default SpecieCard;
