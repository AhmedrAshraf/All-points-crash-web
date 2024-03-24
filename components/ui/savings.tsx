"use client";

import React from "react";
import Card from "@/components/ui/card";

function savings() {
  return (
    <div className="flex items-center flex-col py-4 mb-20">
      <span className="text-white text-center mb-6 mt-16 animate-fadeIn text-6xl font-Bebas_Neue">
        <span className="text-orangeFont">SAVINGS </span>BREAKDOWN
      </span>
      <div
        className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2 mb-10 animate-fadeIn opacity-0"
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
        <Card
          title="$49.999"
          icon="/images/solar-house 1.png"
          tagline="Everyone loves extra cash in their pockt when."
        />
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
        <Card
          title="$49.999"
          icon="/images/solar-house 1.png"
          tagline="Everyone loves extra cash in their pockt when."
        />
      </div>
    </div>
  );
}
export default savings;
