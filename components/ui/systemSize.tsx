"use client";

import React from "react";
import { Check } from "lucide-react";
import Card from "@/components/ui/card";

function systemSize() {
  return (
    <section className="py-4">
      <div
        className="text-center mb-6 mt-16 animate-fadeIn text-6xl font-Bebas_Neue"
        style={{ animationDelay: "0s" }}
      >
        <span className="text-white">The new way to find your</span>
        <span className="text-orangeFont"> new home</span>
      </div>
      <div className="text-center mb-6 text-gray-200">
        <p className="font-sans text-lg  inline-flex items-center justify-center">
          <Check className="text-orangeFont mr-2" size={20} /> A solar system’s
          size refers to the top output of electricity the system is capable of
          generating.
        </p>
        <p className="font-sans text-lg inline-flex items-center justify-center">
          <Check className="text-orangeFont mr-2" size={20} /> The estimated
          number of panels your home will require to meet your energy needs.
        </p>
      </div>
      <div
        className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2 mb-10 animate-fadeIn opacity-0"
        style={{
          animation: "fadeIn 1s ease-out forwards",
          animationDelay: "0.5s",
        }}
      >
        <Card
          tagline="SYSTEM SIZE"
          title="22.61 - 29.79kWh*"
          icon="/images/solar-house 1.png"
        />
        <Card
          title="70 - 80*"
          tagline="SOLAR PANELS"
          icon="/images/compass.png"
        />
        <Card
          tagline="Inverter"
          title="14.32 - 19.07*"
          icon="/images/compass.png"
        />
      </div>
    </section>
  );
}

export default systemSize;
