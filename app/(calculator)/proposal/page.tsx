import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Proposal() {
  return (
    <div className="min-h-screen bg-[#23201c] text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Hey, Jon Doe!</h1>
        <p>Here Is Your New Estimate!</p>
        <div className="text-3xl font-bold my-4">$272 - $306</div>
        <p>
          You Will Save <span className="font-bold">-$68/month</span>
        </p>
      </div>

      <div className="flex justify-center my-8">
        <Image
          src="/images/house.png"
          alt="Map view"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="text-center my-8">
        <h2 className="text-2xl font-bold mb-4">BREAKDOWN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">25 Year Savings</p>
            <p className="text-2xl">$59,999</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">Tax Credits</p>
            <p className="text-2xl">$39,999</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">Added Home Value</p>
            <p className="text-2xl">$49,999</p>
          </div>
        </div>
      </div>
      <Button variant="orange" className="w-full">
        Contact Me
      </Button>

      <div className="text-center my-8">
        <h2 className="text-2xl font-bold mb-4">
          THE NEW WAY TO FIND YOUR NEW HOME
        </h2>
        <p className="mb-4">
          A solar system&apos;s size refers to the top output of electricity the
          system is capable of generating.
        </p>
        <p>
          The estimated number of panels your home will require to meet your
          energy needs.
        </p>
      </div>

      <div className="text-center my-8">
        <h2 className="text-2xl font-bold mb-4">BREAKDOWN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">25 Year Savings</p>
            <p className="text-2xl">$59,999</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">Tax Credits</p>
            <p className="text-2xl">$39,999</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-bold text-orange-500">Added Home Value</p>
            <p className="text-2xl">$49,999</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-1/2">
          <Image
            src="/images/house.png"
            alt="Testimonial"
            width={500}
            height={500}
            className="rounded-full"
          />
          <blockquote className="italic my-4">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.&quot;
          </blockquote>
          <p className="font-bold">John Doe</p>
          <p>@johndoe</p>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
