"use client";

import Link from "next/link";
import React from "react";
import { customEncodeURIComponent } from "@/app/utils/utils";

const PeopleCard = ({ people }: any) => {
    return (
        <Link href={`/people/${customEncodeURIComponent(people.name)}`}>
            <div className="flex justify-center items-center flex-col w-[300px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2">
                <p className="font-semibold text-xl">{people?.name}</p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Birth year:
                    </span>
                    {people?.birth_year}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Gender:
                    </span>
                    {people?.gender}
                </p>
            </div>
        </Link>
    );
};

export default PeopleCard;
