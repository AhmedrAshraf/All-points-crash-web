"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { auth, database } from "../../firebase";
import { Button } from "@/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const [psw, setPsw] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, psw)
      .then((user) => {
        setDoc(doc(database, "users", user.user.uid))
          .then(() => {
            router.replace("/");
          })
          .catch((er) => alert(er));
      })
      .catch((er) => alert(er));
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
                borderRadius: 500,
                border: "4px solid white",
                marginBottom: 20,
              }}
            />
            <p className="text-xs mt-4 font-light text-white">
              Submit Details & Create Account
            </p>
            <h1 className="text-2xl mt-2 font-semibold text-white">
              Welcome All-Points!
            </h1>

            <div className="p-10 w-full">
              <div
                className="mb-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Input
                  value={name}
                  placeholder="Full Name"
                  style={{ width: "49%" }}
                  onChange={(e) => setname(e.target.value)}
                />
                <Input
                  value={address}
                  placeholder="Address"
                  style={{ width: "49%" }}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
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
              Signup
            </Button>
            <Link href={"login"}>
              <p className="font-Poppins text-sm text-opacity-50 font-light text-white inline-flex my-2">
                Already have an account? Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
