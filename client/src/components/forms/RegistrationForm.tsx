"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const registerSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password too long")
    .regex(
        passwordRegex,
        "Password must include uppercase, lowercase, number, and special character"
      ),
  coPassword: z
    .string()
    .min(6, "ConfPassword must be at least 6 characters")
    .max(32, "Password too long"),  
})
.refine((data)=>data.password === data.coPassword,{
    path:["coPassword"],
    message: "Password do not match"
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-6 rounded-xl shadow-lg flex flex-col gap-6 text-white"
    >

    <div className="relative w-full">
        <input
            type="text"
            id="mobile"
            {...register("mobile")}
            placeholder=" "
            className="peer block w-full rounded-full px-4 py-2 text-white placeholder-transparent bg-white/5 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
        <label
            htmlFor="mobile"
            className="absolute left-4  text-white text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-300"
        >
            Mobile Number
        </label>
        {errors.mobile && (
            <span className="text-red-400 text-sm mt-1">{errors.mobile.message}</span>
        )}
    </div>


    <div className="relative w-full">
        <input 
          type="text" 
          id="password"
          {...register("password")}
          placeholder=" "
          className="peer block w-full rounded-full px-4 py-2 text-white placeholder-transparent bg-white/5 focus:outline-none focus:ring-1 focus ring-green-600"
          
        />
        <label 
           htmlFor=""
           className="absolute left-4 text-sm text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-300"

           >
            Password
        </label>  
        {errors.password && (
            <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>
        )}
    
    </div>

    <div className="relative w-full">
        <input 
          type="text" 
          id="coPassword"
          {...register("coPassword")}
          placeholder=" "
          className="peer block w-full rounded-full px-4 py-2 text-white placeholder-transparent bg-white/5 focus:outline-none focus:ring-1 focus ring-green-600"
          
        />
        <label 
           htmlFor=""
           className="absolute left-4 text-sm text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-300"

           >
            Confirm Password
        </label>  
        {errors.coPassword && (
            <span className="text-red-400 text-sm mt-1">{errors.coPassword.message}</span>
        )}
    
    </div>

      <button
        type="submit"
        className="mt-4 bg-green-600 hover:bg-green-700 rounded-full py-2 font-semibold transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;
