import React from "react";
import Layout from "../Components/layout/Layout";
import { guide } from "../Components/Lists/HomeList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import Image from "next/image";

export default function Steps() {
  return (
    <Layout className="bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          USERGUIDE
        </h2>
        <p className="text-lg text-muted-foreground ">
          We've made the process
          simple and seamless, ensuring that more people can easily manage their pets.
        </p>
      </div>
      
        <div className="grid md:grid-cols-2 gap-8">
          {guide.map((item) => (
            <Card key={item.id} className="bg-card">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-semibold text-lg">
                  {item.id}
                </div>
                <CardTitle className="text-xl mb-2 text-accent">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Layout>
  );
}
