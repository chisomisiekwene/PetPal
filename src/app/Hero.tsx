import React from "react";
import petImage from "../assets/dog.jpeg";
import Image from "next/image";
import Layout from "../Components/layout/Layout";
import { ShoppingBag } from 'lucide-react'
import { Button } from "../Components/ui/button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-accent to-secondary py-20 md:py-40">
      <Layout className="items-center">
      <div className=" flex flex-col md:grid grid-cols-5 gap-5 mt-5">
          <div className="flex flex-col col-span-3 justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2 text-white max-w-[800px] w-full">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold uppercase">
                Welcome to PetPal
              </h1>
              <p className="text-lg md:text-2xl">
              Your one-stop solution for managing your pet store. Add, edit, and track pets with ease.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0">
              <Button className="w-auto p-5 rounded-lg bg-white flex m-auto md:ml-0 gap-2 font-semibold text-base hover:bg-accent hover:text-white"  >
                Get Started
              </Button>
            </div>
          </div>
          <div className="hidden md:flex col-span-2 items-center justify-center w-[100%] ">
            <Image
              alt="Adorable puppy"             
              src={petImage}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </Layout>


      
    </div>
  );
}
