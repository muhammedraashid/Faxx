"use client";

import LoginForm from "@/components/forms/LoginForm";
import Navbar from "@/components/Navbar"; 
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex flex-col justify-center items-center flex-1 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Login
        </h2>

        <div className="w-full max-w-md ">
          <LoginForm />
        </div>
        <a href={ROUTES.register} className="text-green-900 ">Create an account</a>
      </main>
    </div>
  );
}
