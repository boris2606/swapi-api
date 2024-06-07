import Link from "next/link";
import navigation from "@/app/data/data";
import Image from "next/image";

export default function Header() {
    return (
        <header className="z-20 relative bg-black p-4 shadow-lg">
            <div className=" p-2 w-full max-w-[1200px] m-auto flex justify-between md:flex-col md:justify-center md:items-center gap-5">
                <div className="">
                    <Link href={"/"}>
                        <Image
                            src="/star_wars.svg"
                            className="z-20 max-w-[130px]"
                            alt="Logo"
                            layout="responsive"
                            width={100}
                            height={50}
                        />
                    </Link>
                </div>
                <nav className="flex justify-center gap-4 items-center">
                    <ul className="flex gap-4 flex-wrap md:justify-center">
                        {navigation?.map((item, index) => (
                            <li
                                key={index}
                                className=" text-lg font-semibold uppercase py-1  text-center border-lightning-yellow-600 border-transparent border-b-4 hover:border-lightning-yellow-600   transition-all duration-300 text-lightning-yellow-500 hover:text-white"
                            >
                                <Link href={item.link} className="block">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
