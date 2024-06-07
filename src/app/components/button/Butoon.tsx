import React from "react";

const Butoon = ({ event, text }: any) => {
    return (
        <button
            className=" bg-lightning-yellow-600 font-semibold text-lg p-3 rounded-lg "
            onClick={() => event()}
        >
            {text}
        </button>
    );
};

export default Butoon;
