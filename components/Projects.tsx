import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "SoundClaudio",
    description:
      "SoundClaudio is a replica of SoundCloud, a music streaming and sharing platform.",
    code: "https://github.com/Cassio7/SoundClaudio",
    previewPhoto: "/projects/SoundClaudio.png",
    technologies: [
      "Angular",
      "Bootstrap",
      "NodeJS",
      "Express",
      "TypeScript",
      "MySQL",
    ],
  },
  // {
  //   title: "Tortellini TAP & APD",
  //   description:
  //     "Tortellini is an e-commerce website for managing and selling tortellini.",
  //   code: "https://github.com/Cassio7/Tortellini_website",
  //   previewPhoto: "/projects/trannoi.png",
  //   technologies: [
  //     "Laravel",
  //     "Bootstrap",
  //     "PHP",
  //     "MySQL",
  //   ],
  // },
  {
    title: "Booking Classes",
    description:
      "Telegram Bot for booking classes at University of Perugia, Computer Scienze course.",
    code: "https://github.com/Cassio7/PrenotazioneLezioniBot",
    previewPhoto: "/projects/telegram.jpg",
    technologies: [
      "Python",
      "Telebot",
      "MySQL",
    ],
  },
  {
    title: "Trannoi",
    description:
      "Trannoi is a command-line interface game, inspired by AmongUs.",
    code: "https://github.com/Cassio7/Trannoi",
    previewPhoto: "/projects/trannoi.png",
    technologies: [
      "C",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <Image
              src={project.previewPhoto}
              alt="ProjectImg"
              layout="responsive"
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-t-md w-full"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.code}>
                  <Button variant="default">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
