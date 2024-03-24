import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";

const CalculatorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-[#1f1b18] px-10 lg:px-60 md:px-8">
      {children}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
        <Image
          src="/images/solarsaver.png"
          alt="Solar Panel logo"
          width={100}
          height={100} // Adjust the height to maintain the aspect ratio of your logo
        />
      </div>
    </div>
  );
};

export default CalculatorLayout;
