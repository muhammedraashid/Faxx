"use client";

import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import StarBorder from "@/components/StarBorder";
import { ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";


export default function HomePage() {
    const router = useRouter();

    const routeToRegister=()=>{
        router.push(ROUTES.register)
    }

  return (
    <main className="select-none min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6">
      
      <Navbar/>

      <section className="flex flex-col items-center text-center mt-50">
        
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          F a x x
        </GradientText>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Connect instantly with friends and colleagues. Faxx is a fast, modern messaging application designed to make your conversations seamless, interactive, and fun.
        </p>

        <div className="flex gap-4 mt-10">
          <button 
            className="px-6 py-2 rounded-full cursor-pointer bg-white text-black font-semibold hover:opacity-80 transition"
            onClick={routeToRegister}
            >
            Get Started
          </button>
        
          <StarBorder
                as="button"
                className="custom-class cursor-pointer hover:scale-103 transition-all duration-200"
                color="green"
                speed="5s"
                >
            Learn More
          </StarBorder>
        </div>
      </section>

      <footer className="mt-auto py-10 text-white/50 text-sm">
        © {new Date().getFullYear()} Faxx • All rights reserved
      </footer>
    </main>
  );
}
