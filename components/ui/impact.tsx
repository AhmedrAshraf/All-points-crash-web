"use client";

import React from "react";
import Image from "next/image";
import Card from "@/components/ui/card";

function impact() {
  return (
    <div className="flex items-center flex-col py-4 mb-20 relative">
      <div className="absolute w-full min-h-full z-0 opacity-40">
        <Image
          src="/images/carbon.png"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          quality={100}
          alt="carbon"
        />
      </div>
      <span className="text-white text-center mb-16 mt-16 animate-fadeIn text-6xl font-Bebas_Neue z-10">
        Your <span className="text-orangeFont">Impact</span>
      </span>
      <span className="text-center w-4/5 z-10">
        Solar power reduces our dependence on fossil fuels, curbing harmful
        emissions and combating climate change. Your choice to embrace solar
        energy makes a meaningful impact, contributing to a greener and more
        sustainable world for yourself and those who come after you.
      </span>
      <div
        className="md:grid md:grid-cols-2 md:gap-4 flex flex-col gap-2 my-16 animate-fadeIn opacity-0 z-10"
        style={{
          animation: "fadeIn 1s ease-out forwards",
          animationDelay: "0.5s",
        }}
      >
        <Card
          title="$59.999"
          icon="/images/solar-house 1.png"
          tagline="Everyone loves extra cash in their pockt when."
        />
        <Card
          title="$39.999"
          icon="/images/solar-house 1.png"
          tagline="Everyone loves extra cash in their pockt when."
        />
      </div>
    </div>
  );
}
export default impact;
