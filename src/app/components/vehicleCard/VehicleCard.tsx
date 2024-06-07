"use client";

import Link from "next/link";
import React from "react";
import { customEncodeURIComponent } from "@/app/utils/utils";

const VehicleCard = ({ vehicle }: any) => {
    return (
        <Link href={`/vehicles/${customEncodeURIComponent(vehicle.name)}`}>
            <div className="flex justify-center items-center flex-col w-[500px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2">
                <p className="font-semibold text-xl">{vehicle?.name}</p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Model:
                    </span>
                    {vehicle?.model}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        Passengers:
                    </span>
                    {vehicle?.passengers}
                </p>
                <p className="text-base font-semibold">
                    <span className="font-semibold text-white text-base mr-2">
                        crew:
                    </span>
                    {vehicle?.crew}
                </p>
            </div>
        </Link>
    );
};

export default VehicleCard;
