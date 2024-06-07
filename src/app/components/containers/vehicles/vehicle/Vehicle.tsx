import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const Vehicle = ({ vehicleData }: any) => {
    const currentVehicle = vehicleData[0];

    return (
        <div className=" flex justify-center items-start gap-5 md:flex-col w-full md:items-center">
            <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
            </div>
            <div className="flex flex-col gap-2 md:justify-center md:items-center">
                <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                    {currentVehicle?.name}
                </h2>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Cargo capacity:
                    </span>
                    {currentVehicle?.cargo_capacity}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Consumables:
                    </span>
                    {currentVehicle?.consumables}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Cost in credits:
                    </span>
                    {currentVehicle?.cost_in_credits}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Crew:
                    </span>
                    {currentVehicle?.crew}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Length:
                    </span>
                    {currentVehicle?.length}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Manufacturer:
                    </span>
                    {currentVehicle?.manufacturer}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Max atmosphering speed:
                    </span>
                    {currentVehicle?.max_atmosphering_speed}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Model:
                    </span>
                    {currentVehicle?.model}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Passengers:
                    </span>
                    {currentVehicle?.passengers}
                </p>
                <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                    <span className="text-white text-sm font-semibold uppercase mr-2">
                        Vehicle class:
                    </span>
                    {currentVehicle?.vehicle_class}
                </p>

                <InfoLinks
                    title={`Films:`}
                    elemObj={currentVehicle}
                    keyObj={`films`}
                    way={`films`}
                    keyNameSearch={`title`}
                />

                <InfoLinks
                    title={"Pilots:"}
                    elemObj={currentVehicle}
                    keyObj={"pilots"}
                    way={"people"}
                    keyNameSearch={"name"}
                />
                <Link
                    className="p-3 text-center max-w-[200px] rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/vehicles`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default Vehicle;
