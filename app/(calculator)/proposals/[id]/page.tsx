"use client";

import React from "react";
import Image from "next/image";

import Navbar from "@/components/ui/navbar";
import { useSearchParams } from "next/navigation";
import Estimate from "@/components/ui/estimate";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import SystemSize from "@/components/ui/systemSize";
import Savings from "@/components/ui/savings";
import Impact from "@/components/ui/impact";
import Process from "@/components/ui/process";
import Card from "@/components/ui/card";
import UserDesign from "@/components/ui/userDesign";
import SolarHelps from "@/components/ui/solarHelps";

function Proposals() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const address = searchParams.get("address");
  const houseType = searchParams.get("houseType");
  const firstName = searchParams.get("firstName");
  const squareFeet = searchParams.get("squareFeet");
  const totalSavings = searchParams.get("totalSavings");
  const sunlightHours = searchParams.get("sunlightHours");
  const electricityBill = searchParams.get("electricityBill");

  console.log(houseType, electricityBill, address, firstName);

  return (
    <div className="text-white py-8">
      <Navbar />

      <Estimate />
      <SystemSize />
      <UserDesign />
      <SolarHelps />
      <Savings />
      <Impact />
      <Process />

      <div className="flex items-center flex-col text-black font-Bebas_Neue">
        <span className="text-white mb-10 animate-fadeIn text-6xl ">
          <span className="text-orangeFont">PRICE </span>BREAKDOWN
        </span>
        <div className="w-full mb-20 relative py-8 px-4 md:px-14 bg-white rounded-sm">
          <span className="text-orange-400 animate-fadeIn text-5xl ">
            SOLAR SAVER
          </span>
          <span className="flex justify-end bg-darkBg py-2 px-4 text-white animate-fadeIn text-xl md:text-3xl ">
            03/5/24
          </span>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 justify-between md:h-96">
            <div className="relative w-full md:w-3/5 h-48 md:h-full mb-4 md:mb-0">
              <Image
                fill={true}
                alt="Map view"
                objectFit="cover"
                className="rounded-xl"
                src={image ? image : "/images/house.png"}
              />
            </div>
            <div className="text-right w-full md:w-2/5 flex flex-col justify-around items-end pl-4 md:pl-6">
              <div>
                <h2 className="text-3xl md:text-5xl">$153/Month</h2>
                <p className="text-orange-400 text-xl md:text-3xl">
                  in savings
                </p>
              </div>
              <p className="w-full text-xl md:text-3xl border-b-2 border-black border-solid">
                23 panels
              </p>
              <p className="w-full text-xl md:text-3xl border-b-2 border-black border-solid">
                14KW
              </p>
              <p className="w-full text-xl md:text-3xl border-b-2 border-black border-solid">
                *100% OFFSET
              </p>
              <p className="font-sans text-xs md:text-sm">
                *Final Panel layout subject to change based on fitment and local
                requirements
              </p>
              <Button
                variant="orange"
                className="bg-orange-500 py-4 md:py-6 px-4 font-Poppins rounded-lg text-lg md:text-xl font-bold w-full md:w-fit mt-4"
              >
                <div className="mr-2 h-6 w-6 bg-white rounded-full justify-center items-center flex">
                  <Image
                    src="/images/solarsaver.png"
                    alt="Solar Panel logo"
                    width={30}
                    height={30}
                  />
                </div>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full" style={{ height: "40em" }}>
        <div
          className="absolute w-screen left-0 bottom-0"
          style={{ height: "40em" }}
        >
          <Image
            src="/images/sunFooter.png"
            layout="fill"
            objectFit="cover"
            alt="carbon"
          />
        </div>
      </div>
    </div>
  );
}

export default Proposals;