import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";
import { BackgroundBeams } from "./ui/background-beams";

function HeroSection() {
  return (
    <div>
      <div className="min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
        <div className="space-y-5 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Hello, Nice to meet you!👋🏻 <br />
            <span className="underline underline-offset-8 decoration-green-500">
              {"I'm Ayush."}
            </span>
          </h1>
          <p className="md:w-96 text-md text-gray-300">
            {
              "Based in India, Fullstack developer skilled in DSA & passion for solving real-life problems. "
            }           
            {
              "Completed my BCA in 2023 & MCA will be completed in 2025, seeking SDE roles."
            }
          </p>
          <Link
            href={"mailto:ayushdhiman0107@gmail.com"}
            className="inline-block group"
          >
            <Title text="Contact Me 📧" />
          </Link>
          <br />
          <Link
            target="__blank"
            href={"https://drive.google.com/file/d/1pJIifdHgkQWJ__O9S2pwo9mA3AwaDeL9/view?usp=sharing"}
            className="inline-block group"
          >
            <Title text="See my Resume 📜" />
          </Link>
        </div>
        <div className="relative">
          <div className="w-73 sm:w-15 h-72 sm:h-15 space-y-3 rotate-[-30deg] relative">
            <div className="flex gap-3 translate-x-8">
              <div className="w-32 h-32  rounded-2xl bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
          </div>
          <Link
            target="__blank"
            className="absolute bottom-5 sm:bottom-14 lg:-left-10 left-8 sm:left-10"
            href="https://www.linkedin.com/in/aayushdhimann/"
          >
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <p> 💼 Seeking SDE positions</p>
            </MovingBorderBtn>
          </Link>
        </div>
      </div>
      <div>
        <BackgroundBeams className="-z-10 absolute inset-0" />
      </div>
    </div>
  );
}

export default HeroSection;
