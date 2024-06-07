import InfoLinks from "@/app/components/infoLinks/InfoLinks";
import Link from "next/link";
import { ImFilePicture } from "react-icons/im";

const Film = ({ film }: any) => {
    const filmObject = film[0];

    return (
        <div className=" bg-gradient-to-r from-zinc-800 to-zinc-900 min-h-full w-full">
            <div className="flex flex-col gap-5 p-10">
                <div className=" flex justify-start items-start gap-5 md:flex-col">
                    <div className="w-full min-w-[200px] max-w-[300px]  flex justify-center items-center">
                        <ImFilePicture className="w-full h-full text-lightning-yellow-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className=" text-lightning-yellow-600 text-2xl font-semibold">
                            {filmObject?.title}
                        </h2>
                        <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                            <span className="text-white text-sm font-semibold uppercase mr-2">
                                Director:
                            </span>
                            {filmObject?.director}
                        </p>
                        <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                            <span className="text-white text-sm font-semibold uppercase mr-2">
                                Producer:
                            </span>
                            {filmObject?.producer}
                        </p>
                        <p className=" text-lg flex items-baseline text-lightning-yellow-600">
                            <span className="text-white text-sm font-semibold uppercase mr-2">
                                Release date:
                            </span>
                            {filmObject?.release_date}
                        </p>
                        <InfoLinks
                            title={`Planets:`}
                            elemObj={filmObject}
                            keyObj={`planets`}
                            way={`planets`}
                            keyNameSearch={`name`}
                        />
                        <InfoLinks
                            title={"People:"}
                            elemObj={filmObject}
                            keyObj={"characters"}
                            way={"people"}
                            keyNameSearch={"name"}
                        />
                        <InfoLinks
                            title={"Starships:"}
                            elemObj={filmObject}
                            keyObj={"starships"}
                            way={"starships"}
                            keyNameSearch={"name"}
                        />
                        <InfoLinks
                            title={"Vehicles:"}
                            elemObj={filmObject}
                            keyObj={"vehicles"}
                            way={"vehicles"}
                            keyNameSearch={"name"}
                        />
                        <InfoLinks
                            title={"Species:"}
                            elemObj={filmObject}
                            keyObj={"species"}
                            way={"species"}
                            keyNameSearch={"name"}
                        />
                    </div>
                </div>
                <div className="">
                    <p className=" font-semibold text-2xl text-lightning-yellow-600">
                        Opening crawl
                    </p>
                    <hr className=" bg-lightning-yellow-600 h-[4px] border-none my-2" />
                    <p className=" text-lg text-white">
                        {filmObject?.opening_crawl}
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    className="p-3 text-center rounded-lg bg-lightning-yellow-500 text-lg font-semibold my-5 hover:bg-white transition-all"
                    href={`/films`}
                >
                    Back to list
                </Link>
            </div>
        </div>
    );
};

export default Film;
