"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import icon from "@/app/Screenshot.png"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Mohammed <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Software Developer
              </span>
              <p className="mt-5 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                Hi, I’m Mohammed, a Software Developer. I create functional and user-friendly web applications with a focus on clean design and performance.</p>
            </h1>
          </>
        }
      >
        <Image
          src={icon}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto bg-black rounded-xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
