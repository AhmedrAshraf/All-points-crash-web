"use client";

import React from "react";
import Image from "next/image";

function process() {
  return (
    <div className="flex items-center flex-col py-4 mb-20">
        <span className="text-white my-16 animate-fadeIn text-6xl font-Bebas_Neue">
          THE <span className="text-orangeFont">PROCESS</span>
        </span>
        <div className=" w-full mb-20 relative">
          <div className="absolute w-full min-h-full opacity-40">
            <Image
              src="/images/solarbg.png"
              objectFit="cover"
              layout="fill"
              className="rounded-2xl"
              alt="solar"
            />
          </div>
          <div className="flex items-center flex-col z-10 w-full bg-red-50 relative rounded-xl py-8 px-16 sm:py-16 sm:px-32">
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Savings report
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Approval Process
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Signatures
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Site Survey
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Final Design and permit
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Installation
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
            <details className="py-6 border-solid border-black border-b-2 w-full">
              <summary className="text-3xl text-black font-Bebas_Neue">
                Activation
              </summary>
              <p className="text-lg mt-4 text-black font-Bebas_Neue">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat assumenda laudantium quam saepe autem nam iure laborum
                quaerat
              </p>
            </details>
          </div>
        </div>
      </div>
  );
}
export default process;
