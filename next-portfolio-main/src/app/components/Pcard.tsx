"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import icon from "@/public/Screenshot 2024-11-04 at 11.41.59 PM.png"

export function PcardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[27rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    Paytm Website
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm "
                >
                    Inspired by Paytm, this digital payment interface demonstrates my skills in recreating complex, responsive designs with a focus on user-centric functionality, replicating the convenience of real-world payment solutions.
                </CardItem>
                <CardItem translateZ="100" className="w-full">
                    <Image
                        src={icon}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="#"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white pointer-events-none opacity-50"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="div"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold pointer-events-none opacity-50"
                    >
                        Visit Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
