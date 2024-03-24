import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { useSearchParams } from "next/navigation";

function Estimate() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const address = searchParams.get("address");
  const houseType = searchParams.get("houseType");
  const firstName = searchParams.get("firstName");
  const electricityBill = searchParams.get("electricityBill");

  console.log(houseType, electricityBill, address, firstName);

  const Avatar = () => (
    <Image
      src="/images/ProfilePic.png"
      width={30}
      height={30}
      alt="Image of a solar panel"
      className="rounded-full mr-4"
    />
  );

  return (
    <div className="bg-darkBg sm:justify-around p-5 sm:p-10 py-10 sm:py-20 mt-5 sm:mt-10 rounded-xl flex flex-col sm:flex-row justify-center items-center">
      <div
        className="mb-6 animate-fadeIn font-Bebas_Neue text-center sm:text-left"
        style={{ animationDelay: "0s" }}
      >
        <span className="text-white text-4xl sm:text-6xl">
          <span className="text-orangeFont">Hey, </span>
          {firstName || "Jon Doe"}!
        </span>
        <p className="font-Poppins text-lg sm:text-xl mb-4 sm:mb-8">
          Here is Your New Estimate!
        </p>
        <p className="text-4xl sm:text-7xl mb-2 sm:mb-4 font-Bebas_Neue text-orangeFont">
          $272 - $306
        </p>
        <p className="text-xl sm:text-4xl mb-4 sm:mb-8 font-Bebas_Neue text-white">
          You Will Save
          <span className="text-orangeFont"> ~$68</span>
          <span className="text-sm sm:text-xl"> /month</span>
        </p>
        <Button
          variant="orange"
          className="bg-orangeFont py-4 sm:py-6 px-4 font-Poppins rounded-sm text-base sm:text-lg font-bold"
        >
          <Avatar />
          Get Started
        </Button>
      </div>

      <Image
        width={300}
        height={150}
        alt="Map view"
        className="rounded-lg mt-4 sm:mt-0"
        src={image ? image : "/images/house.png"}
      />
    </div>
  );
}

export default Estimate;