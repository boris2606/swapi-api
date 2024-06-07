import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const CurrentPeople = ({ peopleData }: any) => {
    const currentPeople = peopleData[0];

    return (
        <div className=" flex justify-center items-start gap-5 md:flex-col w-full md:items-center">
            <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
            </div>
            <div className="flex flex-col gap-2 md:justify-center md:items-center">
                <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                    {currentPeople?.name}
                </h2>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Skin color:
                    </span>
                    {currentPeople?.skin_color}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Eye color:
                    </span>
                    {currentPeople?.eye_color}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Birth year:
                    </span>
                    {currentPeople?.birth_year}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Mass:
                    </span>
                    {currentPeople?.mass}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Height:
                    </span>
                    {currentPeople?.height}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Hair color:
                    </span>
                    {currentPeople?.hair_color}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Gender:
                    </span>
                    {currentPeople?.gender}
                </p>
                <InfoLinks
                    title={`Films:`}
                    elemObj={currentPeople}
                    keyObj={`films`}
                    way={`films`}
                    keyNameSearch={`title`}
                />
                <InfoLinks
                    title={"Starships:"}
                    elemObj={currentPeople}
                    keyObj={"starships"}
                    way={"starships"}
                    keyNameSearch={"name"}
                />
                <InfoLinks
                    title={"Vehicles:"}
                    elemObj={currentPeople}
                    keyObj={"vehicles"}
                    way={"vehicles"}
                    keyNameSearch={"name"}
                />
                <InfoLinks
                    title={"Species:"}
                    elemObj={currentPeople}
                    keyObj={"species"}
                    way={"species"}
                    keyNameSearch={"name"}
                />
                <Link
                    className="p-3 text-center max-w-[200px] rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/people`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default CurrentPeople;
