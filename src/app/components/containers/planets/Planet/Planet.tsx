import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const Planet = ({ planetData }: any) => {
    const currentPlanet = planetData[0];

    return (
        <div className=" flex justify-center items-start gap-5 md:flex-col w-full md:items-center">
            <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
            </div>
            <div className="flex flex-col gap-2 md:justify-center md:items-center">
                <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                    {currentPlanet?.name}
                </h2>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Climate:
                    </span>
                    {currentPlanet?.climate}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Diameter:
                    </span>
                    {currentPlanet?.diameter}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Gravity:
                    </span>
                    {currentPlanet?.gravity}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Orbital period:
                    </span>
                    {currentPlanet?.orbital_period}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Population:
                    </span>
                    {currentPlanet?.population}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Rotation period:
                    </span>
                    {currentPlanet?.rotation_period}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Surface water:
                    </span>
                    {currentPlanet?.surface_water}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Terrain:
                    </span>
                    {currentPlanet?.terrain}
                </p>
                <InfoLinks
                    title={`Films:`}
                    elemObj={currentPlanet}
                    keyObj={`films`}
                    way={`films`}
                    keyNameSearch={`title`}
                />
                <InfoLinks
                    title={"residents:"}
                    elemObj={currentPlanet}
                    keyObj={"residents"}
                    way={"people"}
                    keyNameSearch={"name"}
                />
                <Link
                    className="p-3 text-center max-w-[200px] rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/planets`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default Planet;
