import { Button } from "@nextui-org/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="experience"
      className="mt-5 mx-auto max-w-[1240px] bg-neutral-950 p-6 md:p-10 rounded-md"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Button className="mb-4 text-lg">Experience</Button>
        <p className="mb-6 text-gray-300 text-base md:text-lg">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <div className="p-6 bg-neutral-800 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mt-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex-1 text-2xl  text-[#006be6] font-semibold mb-4 md:mb-0">
          Eduagency
        </div>

        <div className="flex-1 w-full md:w-auto">
          <p className="text-xl font-bold mb-2 text-gray-200">
            Intern Frontend Developer
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-6">
            • Contributed to the development of a travel website for tourists as
            part of the core team, leveraging Next.js for frontend development.
            <br />• Gained hands-on experience with Next.js, focusing on
            server-side rendering and dynamic routing for improved performance
            and SEO.
          </p>
        </div>

        <div className="flex-1 text-end text-sm md:text-base text-gray-400 mt-4 md:mt-0">
          01.10.2020 - Present
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="p-6 bg-neutral-800 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mt-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex-1 text-2xl text-[#006be6] font-semibold mb-4 md:mb-0">
          Coreteam
        </div>

        <div className="flex-1 w-full md:w-auto">
          <p className="text-xl font-bold mb-2 text-gray-200">
            Intern Frontend Developer
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-6">
            • Contributed to the development of a travel website for tourists as
            part of the core team, leveraging Next.js for frontend development.
            <br />• Gained hands-on experience with Next.js, focusing on
            server-side rendering and dynamic routing for improved performance
            and SEO.
          </p>
        </div>

        <div className="flex-1 text-end text-sm md:text-base text-gray-400 mt-4 md:mt-0">
          01.01.2024 - 01.04.2024
        </div>
      </div>
    </div>
  );
};
