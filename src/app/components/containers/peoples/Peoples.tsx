"use client";

import { dataPeople } from "@/app/fetchData";
import React, { useCallback, useEffect, useState } from "react";
import PeopleCard from "../../peopleCard/PeopleCard";
import Butoon from "../../button/Butoon";
import SearchField from "../../serachField/SearchField";

const Peoples = ({ countAllPeoples }: any) => {
    const [page, setPage] = useState(1);
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = useCallback(async (paramsObj: any) => {
        const result = await dataPeople.getDataPeopleParams(paramsObj);
        setPeople(result);
    }, []);

    const handlerNextPage = () => {
        setPage((prev) => (prev < countAllPeoples ? prev + 1 : prev));
    };

    const handlerPrevPage = () => {
        page > 1 ? setPage((prev) => prev - 1) : setPage(1);
    };

    useEffect(() => {
        fetchData({
            page: page,
            name: search,
        });
    }, [fetchData, page, search]);

    return (
        <div className="flex w-full max-w-[1200px] m-auto p-3 flex-col">
            <h2 className="text-center text-lightning-yellow-600 mb-5 text-3xl font-semibold">
                Characters
            </h2>
            <div className="flex justify-center w-full mb-5">
                <SearchField handler={setSearch} searchBy="name" />
            </div>
            <div className="flex justify-around gap-4 flex-wrap">
                {people?.length !== 0 ? (
                    people?.map((elem, index) => (
                        <PeopleCard key={index} people={elem} />
                    ))
                ) : (
                    <p className=" text-red-400 font-semibold text-lg">
                        Nothing was found in your search
                    </p>
                )}
            </div>
            <div className="flex justify-center gap-5 items-center mt-5">
                <Butoon event={handlerPrevPage} text={"PREV"} />
                <Butoon event={handlerNextPage} text={"NEXT"} />
            </div>
        </div>
    );
};

export default Peoples;
