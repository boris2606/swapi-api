import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const Starship = ({ starshipData }: any) => {
    const currentStarship = starshipData[0];

    return (
        <div className=" flex justify-center items-start gap-5 md:flex-col w-full md:items-center">
            <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
            </div>
            <div className="flex flex-col gap-2 md:justify-center md:items-center">
                <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                    {currentStarship?.name}
                </h2>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        MGLT:
                    </span>
                    {currentStarship?.MGLT}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Cargo capacity:
                    </span>
                    {currentStarship?.cargo_capacity}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Consumables:
                    </span>
                    {currentStarship?.consumables}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Cost in credits:
                    </span>
                    {currentStarship?.cost_in_credits}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Crew:
                    </span>
                    {currentStarship?.crew}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Hyperdrive rating:
                    </span>
                    {currentStarship?.hyperdrive_rating}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Length:
                    </span>
                    {currentStarship?.length}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Manufacturer:
                    </span>
                    {currentStarship?.manufacturer}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Max atmosphering speed:
                    </span>
                    {currentStarship?.max_atmosphering_speed}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Model:
                    </span>
                    {currentStarship?.model}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Passengers:
                    </span>
                    {currentStarship?.passengers}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Starship class:
                    </span>
                    {currentStarship?.starship_class}
                </p>
                <InfoLinks
                    title={`Films:`}
                    elemObj={currentStarship}
                    keyObj={`films`}
                    way={`films`}
                    keyNameSearch={`title`}
                />

                <InfoLinks
                    title={"Pilots:"}
                    elemObj={currentStarship}
                    keyObj={"pilots"}
                    way={"people"}
                    keyNameSearch={"name"}
                />
                <Link
                    className="p-3 text-center max-w-[200px] rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/starships`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default Starship;
