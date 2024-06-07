import Link from "next/link";
import { getDataByUrl } from "@/app/fetchData/dataByUrl";
import { customEncodeURIComponent } from "@/app/utils/utils";

export default async function WrapperLink({
    element,
    way,
    keyNameSearch,
}: any) {
    const elemData = await getDataByUrl(element);

    return (
        <>
            {way?.length !== 0 ? (
                <Link
                    href={`/${way}/${customEncodeURIComponent(
                        elemData[keyNameSearch]
                    )}`}
                    className=" border-b-2 border-transparent hover:border-lightning-yellow-600 hover:text-white transition-all "
                >
                    {elemData[keyNameSearch]}
                </Link>
            ) : (
                <Link
                    href={`${way}`}
                    className=" border-b-2 border-transparent hover:border-lightning-yellow-600 hover:text-white transition-all "
                >
                    {elemData?.keyNameSearch}
                </Link>
            )}
        </>
    );
}
