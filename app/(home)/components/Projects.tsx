import React from "react";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "./ui/card3d";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      tech: [
        "JavaScript",
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Framer-Motion",
        "TailwindCss",
      ],
      link: "http://localhost:3000",
      cover: "/p1.png",

      // background: "bg-red-500",
    },
    {
      title: "Portfolio",
      tech: [
        "JavaScript",
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Framer-Motion",
        "TailwindCss",
      ],
      link: "http://localhost:3000",
      cover: "/p1.png",

      // background: "bg-indigo-500",
    },
    {
      title: "Portfolio",
      tech: [
        "JavaScript",
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Framer-Motion",
        "TailwindCss",
      ],
      link: "http://localhost:3000",
      cover: "/p1.png",

      // background: "bg-indigo-500",
    },
    {
      title: "Portfolio",
      tech: [
        "JavaScript",
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Framer-Motion",
        "TailwindCss",
      ],
      link: "http://localhost:3000",
      cover: "/p1.png",
      // background: "bg-red-500",
    },
  ];
  return (
    <div className=" p-5 sm:p-0 gap-4 border-t">
      <Title
        text="Projects 🚧"
        className="flex flex-col items-center justify-center rotate-3 p-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <div className={cn("p-1 rounded-full")}>
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.tech.join(" , ")}
                    </CardItem>
                    {/* <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.tech.map((t) => {
                        return <h1>{t}</h1>;
                      })}
                    </CardItem> */}

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        src={project.cover}
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        See →
                      </CardItem>
                      {/* <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Sign up
                      </CardItem> */}
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
