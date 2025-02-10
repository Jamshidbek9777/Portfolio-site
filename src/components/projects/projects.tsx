"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from "@nextui-org/react";
import { useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  img: string;
  techs: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Atigi shop",
    description:
      "A feature-rich e-commerce website designed for selling toys, providing parents with a seamless shopping experience. The platform includes categorized product listings, advanced filtering options, and a user-friendly interface to enhance browsing and purchasing.",
    img: "/img/kosmosx-main.png",
    techs: ["ReactJs", "Vite", "Antd", "Tailwind", "Tanstack query"],
    link: "https://atigi.shop",
  },
  {
    id: 2,
    name: "Lets trip",
    description:
      "Letstrip.travel is a dynamic travel website designed to help tourists explore and book unforgettable trips with ease. The platform offers curated travel experiences, destination guides, and seamless booking options.",
    img: "/img/letstrip.jpg",
    techs: ["NextJs", "Antd", "Zustand", "Tanstack query"],
    link: "https://letstrip.travel",
  },
  {
    id: 3,
    name: "EduAgency",
    description:
      "A professionally designed landing page created to showcase EduAgency's services, providing clear and engaging information about educational opportunities. ",
    img: "/img/eduagency.jpg",
    techs: ["ReactJs", "Vite", "Antd", "Tailwind"],
    link: "https://eduagency.uz",
  },
  {
    id: 4,
    name: "Kosmosx",
    description:
      "A landing page to showcase Eduagency companie's cosmic services",
    img: "/img/kosmosx-main.png",
    techs: ["ReactJs", "Vite", "Antd", "Tailwind"],
    link: "https://kosmosx.uz",
  },
];

export const Projects = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    onOpen();
  };

  return (
    <div
      id="projects"
      className="mt-5 mx-auto max-w-[1240px] bg-neutral-950 p-6 md:p-10 rounded-md"
    >
      <div className="flex flex-col justify-center items-center ">
        <Button className="mb-4 text-lg">Projects</Button>
        <p className="mb-6 text-gray-300 text-base md:text-lg">
          Here are my projects:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            onClick={() => handleOpenModal(project)}
            key={project.id}
            className="bg-neutral-800 p-4 rounded-md shadow-md  text-white hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.name}
              className="rounded-t-lg mb-2"
            />

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techs.map((tech) => (
                <Chip key={tech} className="bg-gray-700 text-white p-1 text-xs">
                  {tech}
                </Chip>
              ))}
            </div>
            <h3 className="text-lg font-bold mb-2 mt-2">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        className="max-w-[550px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {activeProject?.name}
              </ModalHeader>
              <ModalBody>
                <p>{activeProject?.description}</p>
                <img
                  src={activeProject?.img}
                  alt={activeProject?.name}
                  className="rounded-lg"
                />
                <div className="flex flex-wrap justify-start gap-2 mt-3">
                  {activeProject?.techs.map((tech) => (
                    <Chip
                      key={tech}
                      className="bg-gray-700 text-white px-2 py-1 text-xs"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="faded" onPress={onClose}>
                  View code
                </Button>
                <Button color="primary" onPress={onClose}>
                  Live demo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
