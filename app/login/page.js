"use client";

import Image from "next/image";
import { auth, database } from "../../firebase";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const router = useRouter();
  const [psw, setPsw] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, psw)
      .then((user) => {
        getDoc(doc(database, "users", user.user.uid)).then(async (sna) => {
          if (sna.exists()) {
            await localStorage.setItem("user", JSON.stringify(sna.data()));
            router.replace("/home");
          }
        });
      })
      .catch((er) => alert(er));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen">
      <div className="bg-teal-700 flex justify-center flex-col p-4 rounded-xl h-4/5 relative w-full text-center mb-5 items-center">
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
  );
};

export default Login;
