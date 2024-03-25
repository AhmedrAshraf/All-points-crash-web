"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let user = await localStorage.getItem("user");
    if (user) {
      router.replace("home");
    } else {
      router.replace("signup");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen">
      <div className="bg-teal-700 flex justify-center flex-col p-4 rounded-xl h-4/5 relative w-8/12">
        <h1 className="font-Poppins text-lg font-semibold text-white inline-flex items-center justify-center">
          Loading...
        </h1>
      </div>
    </div>
  );
}
