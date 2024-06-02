import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/aayushdhimann/",
      label: "Linkedin",
      icon: FaLinkedin,
    },
    {
      link: "https://www.linkedin.com/in/aayushdhimann/",
      label: "Github",
      icon: FaGithub,
    },
    {
      link: "https://www.linkedin.com/in/aayushdhimann/",
      label: "LeetCode",
      icon: SiLeetcode,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center animate-move-down">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:rotate-2 hover:scale-125">
        Ayush Dhiman 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={index}
              arial-label={social.label}
              target="__blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
