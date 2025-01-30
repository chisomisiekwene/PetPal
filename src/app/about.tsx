import Image from "next/image";
import cute from "../assets/cutiiee.jpg";
import Layout from "@/Components/layout/Layout";

export default function About() {
  return (
    <div className=" py-20">
      <Layout className=" flex flex-col gap-3 lg:gap-10 items-center">
        <h1 className="font-bold text-3xl md:text-5xl text-accent uppercase text-center">
         ABOUT US
        </h1>
        <div className=" flex flex-col md:grid grid-cols-4 gap-8">
          <div className="flex flex-col col-span-2 justify-center text-black space-y-4 text-center lg:text-left order-2">
            <div className="space-y-2 text-black max-w-[800px] w-full flex flex-col gap-2 font-medium ">
              <p className="leading-[3rem] text-lg md:text-xl text-justify">
                We understand your pet is family. So, Whether you need in-home
                pet grooming, pet training, or vet on call, ThePetStore connects
                pet parents with pet care heroes who’ll treat their pet like
                family.{" "}
              </p>
              <p className="leading-[3rem] text-lg md:text-xl text-justify">
                {" "}
                ThePetFam is also committed to making pet care safe, easy, and
                affordable so that everyone can experience the unconditional
                love of a pet. Whatever you and your furr babies are into, we’re
                into it too. And we’ve got your back. Anytime. Anywhere.
                
              </p>
            </div>
          </div>
          <div className="flex col-span-2 items-center justify-center w-[100%] border-2 border-primary rounded-2xl bg-accent shadow-2xl">
            <Image
              alt="Adorable puppy"
              src={cute}
              className="w-full rounded-xl order-1"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
