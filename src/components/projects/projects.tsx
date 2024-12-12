"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
type Project = {
  id: number;
  name: string;
  description: string;
};
const projects = [
  {
    id: 1,
    name: "EduAgency website",
    description: "A modern platform for space exploration.",
  },
  {
    id: 2,
    name: "Academyx",
    description: "An academy designed to teach educators.",
  },
  { id: 3, name: "TravelX", description: "A travel booking platform." },
];

export const Projects = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenModal = (project: any) => {
    setActiveProject(project);
    onOpen();
  };

  return (
    <div
      id="projects"
      className="mt-5 mx-auto max-w-[1240px] bg-neutral-950 p-6 md:p-10 rounded-md"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Button className="mb-4 text-lg">Projects</Button>
        <p className="mb-6 text-gray-300 text-base md:text-lg">
          Here are my projects:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-800 pb-4 rounded-md shadow-md text-center text-white hover:shadow-lg transition"
          >
            <img src="/img/kosmosx-main.png" alt="" />
            <h3 className="text-lg font-bold mb-2">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <Button
              className=""
              color="primary"
              variant="ghost"
              onPress={() => handleOpenModal(project)}
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {activeProject?.name}
              </ModalHeader>
              <ModalBody>
                <p>{activeProject?.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
