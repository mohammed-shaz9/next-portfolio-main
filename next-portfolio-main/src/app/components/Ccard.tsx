"use client";

// Remove duplicate Image import since it's already imported below
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";


export function CcardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[27rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >

                    <span className="text-xl md:text-[4rem] font-bold mt-1 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Car Rentals and Leasing
                        </span>
                    
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm "
                >
                    This is a Django-based web application that allows users to seamlessly book, and manage cars online. With a responsive UI built using Django, HTML, and CSS, it provides a complete end-to-end rental workflow, from vehicle search and selection to booking confirmation and management, ensuring a smooth and efficient experience.
                </CardItem>
                <CardItem translateZ="100" className="w-full">
<Image src="/Screenshot3.png" alt="Car Icon" width={500} height={500} className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl" />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://car-rentals-django.netlify.app/"
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        View Project →
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