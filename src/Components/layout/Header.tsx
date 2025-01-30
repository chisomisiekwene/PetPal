"use client";

import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { Logs, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavItem {
  title: string;
  path: string;
}

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const navlist = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "About Us",
      path: "About",
    },
    {
      title: "Our Features",
      path: "features",
    },
    {
      title: "User Guide",
      path: "User-guide",
    },
    {
      title: "Contact Us",
      path: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveId(entry.target.id);
  //         }
  //       });
  //     },
  //     { root: null, rootMargin: "0px", threshold: 0.1 }
  //   );
  
  //   navlist.forEach((item) => {
  //     const section = document.getElementById(item.path);
  //     if (section) {
  //       observer.observe(section);
  //     }
  //   });
  
  //   return () => observer.disconnect();
  // }, [navlist]);
  

  const handleNavClick = (path: string) => {
    setActiveId(path);
router.push(`/#${path}`)
setIsMobile(false)
    const targetSection = document.getElementById(path);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full ${
        scrolled
          ? "bg-primary shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* mobile view */}
      {isMobile && (
        <motion.div
          className="fixed h-[100%] top-0 py-7 left-0 w-[70%] z-[100] text-black bg-white px-5 flex flex-col gap-8 transition-transform duration-300 ease-in-out transform"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-comic font-bold text-2xl">PETPAL</div>

          <div className=" justify-center text-xl font-semibold flex flex-col gap-8 text-[#01100B]">
          {navlist.map((item) => (
            <nav
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`cursor-pointer hover:scale-105 transition ease-out duration-500 ${
                activeId === item.path ? "text-accent font-bold" : ""
              }`}
            >
              {item.title}
            </nav>
          ))}
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="py-6 px-5 cursor-pointer border-2 rounded-lg border-accent text-black hover:bg-accent hover:text-white"
              >
                <Link href="/auth" className="text-lg lg:text-xl">
                  Login
                </Link>
              </Button>

              <Button
                variant="outline"
                className="py-6 px-5 cursor-pointer border-2 rounded-lg bg-accent text-white hover:border-accent hover:bg-primary hover:text-black"
              >
                {" "}
                <Link href="/auth" className="text-lg lg:text-xl">
                  Signup
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Desktop view */}

      <div className="py-4 ">
        <Layout className="flex items-center justify-between">
          <div className="font-comic font-bold text-2xl md:text-[40px]">
            PETPAL
          </div>

          <div
            className={`hidden lg:flex justify-center text-lg gap-14 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
           {navlist.map((item) => (
            <nav
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`cursor-pointer ${
                activeId === item.path ? "text-accent font-bold" : ""
              }`}
            >
              {item.title}
            </nav>
          ))}
          </div>
          <Logs className="flex lg:hidden" onClick={() => setIsMobile(true)} />
          {isMobile && <X onClick={() => setIsMobile(false)} />}
          <div className="hidden lg:flex justify-center gap-[20px]">
            {/* Apply buttonVariants styles */}
            <Button
              variant="outline"
              className={`py-6 px-5 cursor-pointer border-2 rounded-lg hover:bg-accent hover:text-white ${
                scrolled
                  ? "text-black border-accent"
                  : "text-white border-white"
              }`}
            >
             <Link href="/auth" className="text-lg lg:text-xl">
                Login
              </Link>
            </Button>

            <Button
              variant="outline"
              className="py-6 px-5 cursor-pointer border-2 rounded-lg bg-accent text-white hover:border-accent hover:bg-primary hover:text-black"
            >
              {" "}
              <Link href="/auth" className="text-lg lg:text-xl">
                Signup
              </Link>
            </Button>
          </div>
        </Layout>
      </div>
    </div>
  );
}
