import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import WrapperLink from "@/app/components/wrapperLink/WrapperLink";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const Specie = ({ specieData }: any) => {
    const currentSpecie = specieData[0];

    return (
        <div className=" flex justify-center items-start gap-5 md:flex-col w-full md:items-center">
            <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
            </div>
            <div className="flex flex-col gap-2 md:justify-center md:items-center">
                <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                    {currentSpecie?.name}
                </h2>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Skin colors:
                    </span>
                    {currentSpecie?.skin_colors}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Eye colors:
                    </span>
                    {currentSpecie?.eye_colors}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Hair colors:
                    </span>
                    {currentSpecie?.hair_colors}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Language:
                    </span>
                    {currentSpecie?.language}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Designation:
                    </span>
                    {currentSpecie?.designation}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Classification:
                    </span>
                    {currentSpecie?.classification}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Average lifespan:
                    </span>
                    {currentSpecie?.average_lifespan}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Average height:
                    </span>
                    {currentSpecie?.average_height}
                </p>
                <InfoLinks
                    title={`Films:`}
                    elemObj={currentSpecie}
                    keyObj={`films`}
                    way={`films`}
                    keyNameSearch={`title`}
                />
                <InfoLinks
                    title={`People:`}
                    elemObj={currentSpecie}
                    keyObj={`people`}
                    way={`people`}
                    keyNameSearch={`name`}
                />
                <div className=" text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Homeworld:
                    </span>
                    {currentSpecie?.homeworld && (
                        <WrapperLink
                            element={currentSpecie?.homeworld}
                            way={"planets"}
                            keyNameSearch={"name"}
                        />
                    )}
                </div>
                <Link
                    className="p-3 text-center max-w-[200px] rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/species`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default Specie;
