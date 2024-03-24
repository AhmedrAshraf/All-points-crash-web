"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function userDesign() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  
  return (
    <div className="flex items-center flex-col py-4 mb-20">
      <span className="text-white text-center mb-6 mt-16 animate-fadeIn text-6xl font-Bebas_Neue">
        HOW SOLAR <span className="text-orangeFont">HELPS</span>
      </span>
      <div className="relative w-full h-96">
        <Image
          fill={true}
          alt="Map view"
          objectFit="cover"
          className="rounded-lg"
          src={image ? image : "/images/house.png"}
        />
      </div>
    </div>
  );
}
export default userDesign;
