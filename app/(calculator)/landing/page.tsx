import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <div>
      <section className="py-10 ">
        <div
          className="text-center mb-6 animate-fadeIn text-7xl font-Bebas_Neue"
          style={{ animationDelay: "0s" }}
        >
          <span className="text-orangeFont">Solar</span>
          <span className="text-white"> Calculator</span>
        </div>
        <div className="text-center mb-6 text-gray-200">
          <p className="font-sans text-lg  inline-flex items-center justify-center">
            <Check className="text-orangeFont mr-2" size={20} /> A solar
            system’s size refers to the top output of electricity the system is
            capable of generating.
          </p>
          <p className="font-sans text-lg inline-flex items-center justify-center">
            <Check className="text-orangeFont mr-2" size={20} /> The estimated
            number of panels your home will require to meet your energy needs.
          </p>
        </div>
        <div className="flex items-center justify-center mb-10">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/house.png" // Replace with the actual image path
              alt="Solar Panel"
              layout="responsive"
              width={500} // Original width of the image
              height={400} // Original height of the image
              className="rounded-3xl animate-fadeIn"
              objectFit="contain"
              style={{
                opacity: 0, // Set initial opacity to 0
                animation: "fadeIn 1s ease-out forwards", // Apply the animation
                animationDelay: "0.5s", // Set the delay
              }}
            />
          </div>
        </div>
        <div
          className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2 mb-10 animate-fadeIn"
          style={{
            opacity: 0, // Set initial opacity to 0
            animation: "fadeIn 1s ease-out forwards", // Apply the animation
            animationDelay: "0.8s", // Set the delay
          }}
        >
          <div className="bg-[#1A1714] p-10 flex flex-col text-white text-center justify-center items-center rounded-lg">
            <div className="bg-orangeFont p-4 rounded-full mb-4">
              <Image
                src="/images/solar-house 1.png" // Replace with the actual image path
                alt="Solar Panel"
                width={28}
                height={28}
              />
            </div>
            <div className="text-4xl font-Bebas_Neue mb-4">SYSTEM SIZE</div>
            <p className="text-xs font-sans text-gray-400">See your Wh*</p>
          </div>
          <div className="bg-[#1A1714] p-8 flex flex-col text-white text-center justify-center items-center rounded-lg">
            <div className="bg-orangeFont p-4 rounded-full mb-4">
              <Image
                src="/images/compass.png" // Replace with the actual image path
                alt="Solar Panel"
                width={28}
                height={28}
              />
            </div>
            <div className="text-4xl font-Bebas_Neue mb-4">SOLAR PANELS</div>
            <p className="text-xs font-sans text-gray-400">
              How Many Solar Panels
            </p>
          </div>
          <div className="bg-[#1A1714] p-8 flex flex-col text-white text-center justify-center items-center rounded-lg">
            <div className="bg-orangeFont p-4 rounded-full mb-4">
              <Image
                src="/images/eco-house.png" // Replace with the actual image path
                alt="Solar Panel"
                width={28}
                height={28}
              />
            </div>
            <div className="text-4xl font-Bebas_Neue mb-4">CARBON OFFSET</div>
            <p className="text-xs font-sans text-gray-400">
              US Tonnes Of CO2 Offset Per Year Size
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/calculator">
            <Button
              variant="orange"
              className="bg-orangeFont py-6 px-10 font-bold rounded-sm text-md"
            >
              Calculate Your Savings
            </Button>
          </Link>
        </div>
      </section>
      <section
        className=" py-10 rounded-lg fadeInUp"
        style={{ animationDelay: "1s" }}
      >
        <div className="container mx-auto py-20 px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-20">
            <div className="md:w-1/2">
              <Image
                src="/images/Profile.jpeg" // Replace with the actual image path
                alt="Person's Name"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
            <div className="md:w-1/2 h-1/2 object-cover object-cover text-white space-y-4">
              <blockquote className="text-4xl italic font-Bebas_Neue">
                <span className="text-orangeFont text-6xl mr-2">&quot;</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
                <span className="text-orangeFont  text-6xl ml-2">&quot;</span>
              </blockquote>
              <p className="font-Poppins text-sm">@Jon Doe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
