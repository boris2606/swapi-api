import WrapperLink from "@/app/components/wrapperLink/WrapperLink";

type LinksInfo = {
    title: string;
    elemObj: Record<string, any[]>;
    keyObj: string;
    way: string;
    keyNameSearch: string;
};

const InfoLinks = ({
    title,
    elemObj,
    keyObj,
    way,
    keyNameSearch,
}: LinksInfo) => {
    return (
        <div className=" text-lightning-yellow-600 flex flex-wrap items-center md:justify-center">
            <span className="text-white text-sm font-semibold uppercase mr-2">
                {title}
            </span>

            {elemObj[keyObj]?.map((elem) => {
                return (
                    <>
                        <WrapperLink
                            key={elem}
                            element={elem}
                            way={way}
                            keyNameSearch={keyNameSearch}
                        />
                        <span className="text-white mx-2">/</span>
                    </>
                );
            })}
        </div>
    );
};

export default InfoLinks;
