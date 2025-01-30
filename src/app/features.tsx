"use client";
import Layout from "@/Components/layout/Layout";
import { Heart, MoveRight, Dog, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

export default function Features() {
  const featuredata = [
    {
      icon: Dog,
      title: "Pet Management",
      description: "Easily add, edit, and track pets in your store.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Data",
      description: "Your pet data is safe and secure with us.",
    },
    {
      icon: Heart,
      title: "Pet Care Tips",
      description: "Access a wealth of pet care information.",
    },
  ];

  return (
    <div className="bg-secondary py-20">
      <Layout className="flex flex-col">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Our Features
          </h2>
          <div className="grid gap-10  md:grid-cols-3">
            {featuredata.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 text-center">
                <item.icon className="h-12 w-12 text-black " />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
