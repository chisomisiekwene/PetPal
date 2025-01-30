import React from "react";
import Layout from "./Layout";


export default function Footer() {
  return (
    <div className="bg-accent text-white py-10">
      <Layout className="flex items-center justify-between">
        <div className="font-bold md:text-[40px] text-[30px] ">
          PETSTORE
        </div>
        <span className="text-xl">2025 &copy; PetStore </span>
      </Layout>
    </div>
  );
}

