"use client";

import Image from "next/image";
import navigation from "@/app/data/data";
import Link from "next/link";

export default function Head() {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <video
                className="w-full h-screen object-cover absolute top-0 z-10"
                loop
                autoPlay
                muted
            >
                <source src="/space.mp4" type="video/mp4" />
            </video>
            <div className="flex justify-around md:justify-center items-center gap-5 z-20 p-3 flex-wrap md:flex-col w-full">
                <Image
                    src="/star_wars.svg"
                    className="z-20 max-w-[450px]"
                    alt="Logo"
                    layout="responsive"
                    width={300}
                    height={200}
                />
                <div className=" ">
                    <ul className="flex gap-3 text-white flex-col">
                        {navigation.map((item, index) => (
                            <li
                                key={index}
                                className=" text-3xl font-semibold uppercase  border-b-[4px] border-t-[4px] min-w-[300px] text-center border-lightning-yellow-600 hover:border-transparent hover:bg-lightning-yellow-600 hover:text-black transition-all duration-300 "
                            >
                                <Link href={item.link} className="block py-3">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
