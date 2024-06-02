"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/cardhovereffect";
import {
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThealgorithms,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      text: "Algorithms",
      icon: SiThealgorithms,
    },
    {
      text: "C++",
      icon: SiCplusplus,
    },
    {
      text: "HTML 5",
      icon: SiHtml5,
    },
    {
      text: "JAVA",
      icon: FaJava,
    },
    {
      text: "JavaScript",
      icon: SiJavascript,
    },
    {
      text: "MongoDB",
      icon: SiMongodb,
    },
    {
      text: "Next.js",
      icon: SiNextdotjs,
    },
    {
      text: "Node.js",
      icon: SiNodedotjs,
    },
    {
      text: "Postman",
      icon: SiPostman,
    },
    {
      text: "Python",
      icon: SiPython,
    },
    {
      text: "React.js",
      icon: SiReact,
    },
    {
      text: "SQL",
      icon: SiMysql,
    },
    {
      text: "Tailwind-CSS",
      icon: SiTailwindcss,
    },
    {
      text: "TypeScript",
      icon: SiTypescript,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-1">
      <Title
        text="Skills 🤹🏻"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
