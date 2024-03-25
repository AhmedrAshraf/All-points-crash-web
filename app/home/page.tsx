"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState(null);

  const handleNextStep = () => {};

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let accident = await localStorage.getItem("accident");
  };

  const Avatar = () => (
    <Image
      width={150}
      height={150}
      alt="All Points Logo"
      src="/images/logo2.png"
      className="rounded-full mb-4 bg-black border-2 p-2"
    />
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen">
      <div className="bg-teal-700 flex justify-center flex-col p-4 rounded-xl h-4/5 relative w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center flex-col items-center mb-5">
            <Avatar />
            <h1 className="font-Poppins text-lg font-semibold text-white inline-flex items-center justify-center">
              Welcome To All-Points-Crash
            </h1>
            <p className="font-Poppins text-xs text-opacity-50 font-light text-white inline-flex items-center justify-center my-2">
              Report Accident in a seconds
            </p>
          </div>

          <div
            className="text-center mb-6 animate-fadeIn"
            style={{ animationDelay: "0s" }}
          >
            <span className="font-Bebas_Neue text-white text-4xl sm:text-5xl">
              No Accident Recorded Yet! <br />
              <span className="text-orange-500"> Stay Safe</span>
            </span>
          </div>
          <Link href={"report"}>
            <Button
              variant="orange"
              className="px-6 sm:px-10 text-md font-bold uppercase mt-8"
            >
              Report an Accident
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
