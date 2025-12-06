"use client";

import RegistrationForm from "@/components/forms/RegistrationForm";
import Navbar from "@/components/Navbar"; 
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex flex-col justify-center items-center flex-1 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Register
        </h2>

        <div className="w-full max-w-md ">
          <RegistrationForm />
        </div>
        <a href={ROUTES.login} className="text-green-900 ">Already have an account? Try Login</a>
      </main>
    </div>
  );
}
