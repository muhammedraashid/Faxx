"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

type NavbarProps = {
  logoText?: string;
};

const Navbar: React.FC<NavbarProps> = ({ logoText = "Faxx" }) => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push(ROUTES.login);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
    <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
      <div className="text-2xl font-bold text-white">{logoText}</div>
      <button
        onClick={handleSignIn}
        className="px-5 py-2 rounded-full text-white cursor-pointer border border-white/30 hover:bg-white hover:text-black transition-all duration-200"
      >
        Sign In
      </button>
    </div>
  </nav>
  );
};

export default Navbar;
