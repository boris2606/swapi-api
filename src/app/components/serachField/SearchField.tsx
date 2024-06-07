import React from "react";

const SearchField = ({ handler, searchBy }: any) => {
    return (
        <input
            className=" placeholder:text-lightning-yellow-300 outline-none text-lightning-yellow-500 placeholder:opacity-45 p-2 bg-transparent bg-opacity-70 border-2 border-lightning-yellow-500 rounded-lg w-full max-w-[500px] m-auto"
            type="text"
            placeholder={`Search by ${searchBy}`}
            onChange={(e) => handler(e.target.value)}
        />
    );
};

export default SearchField;
