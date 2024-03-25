"use client";

import Image from "next/image";
import { auth } from "../../firebase";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [psw, setPsw] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, psw)
      .then(() => {
        router.replace("/");
      })
      .catch((er) => {
        alert(er);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen">
      <div className="bg-teal-700 flex justify-center flex-col p-4 rounded-xl h-4/5 relative w-8/12">
        <div className="text-center mb-8">
          <div className="flex justify-center flex-col items-center mb-5">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
              style={{
                marginBottom: 20,
                borderRadius: 500,
                border: "4px solid white",
              }}
            />
            <p className="text-xs mt-4 font-light text-white">
              Welcome Back, Please Login to Continue
            </p>
            <h1 className="text-2xl mt-2 font-semibold text-white">
              Welcome All-Points!
            </h1>

            <div className="p-10 w-full">
              <Input
                value={email}
                className="mb-5"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                value={psw}
                placeholder="Password"
                onChange={(e) => setPsw(e.target.value)}
              />
            </div>

            <Button
              variant="orange"
              onClick={handleLogin}
              className="px-6 sm:px-10 text-md font-bold uppercase mt-4"
            >
              Login
            </Button>
            <Link href={"signup"}>
              <p className="font-Poppins text-sm text-opacity-50 font-light text-white inline-flex my-2">
                Dont have an account? Signup
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// 75:20  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
export default Login;
