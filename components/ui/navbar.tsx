import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
      {/* Logo on the left side */}
      <div className="text-white text-lg font-bold">
        <Link href="/">
          <Image
            src="/images/solarsaver.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/page1">Pricing</Link>
          <Link href="/page2">About</Link>
          <Link href="/page3">Tools</Link>
          <Link href="/page4">How it Works</Link>
          <Link href="/page5">Testimonials</Link>
          <Link href="/page6">FAQ</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-orangeFont font-Poppins text-white px-4 py-2 rounded">
          Calculate Solar
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-2/3 bg-gray-900 bg-opacity-90 z-50">
          <div className="flex flex-col items-center p-8 space-y-4">
            <div className="text-white text-lg font-bold">
              <Link href="/">
                <Image
                  src="/images/solarsaver.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            <Link href="/page1">Pricing</Link>
            <Link href="/page2">About</Link>
            <Link href="/page3">Tools</Link>
            <Link href="/page4">How it Works</Link>
            <Link href="/page5">Testimonials</Link>
            <Link href="/page6">FAQ</Link>
            <div className="">
              <button className="bg-orangeFont font-Poppins text-white px-4 py-2 rounded">
                Calculate Solar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
