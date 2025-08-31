import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroScrollDemo } from "@/app/components/Scroll";

import { NavbarDemo } from "./Navbar";
import { FloatingDockDemo } from "./Dock";


export function SpotlightPreview() {
    return (
        <div className="">
            <NavbarDemo />
            <div className="max-h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className=" mx-auto relative w-full md:pt-20">

                    <HeroScrollDemo />
                    <div className="flex flex-col items-center text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Current Project
                        </span>

                        <span className=" w-[15rem] md:md:w-[60rem] flex flex-col items-center text-xl font-light mb-4 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Click and see what's inside
                        </span>
                        <span >
                            <FloatingDockDemo />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}
