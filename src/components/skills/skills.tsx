import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "../ui/outside";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/button";
// const skills = [
//   { id: 1, label: "Javascript", icon: "/img/js.png" },
//   { id: 2, label: "Typescript", icon: "/img/typescript.png" },
//   { id: 3, label: "React.js", icon: "/img/reactjs.png" },
//   { id: 4, label: "Next.js", icon: "/img/nextjs.svg" },
//   { id: 5, label: "Bootstrap", icon: "/img/bootstrap.png" },
//   { id: 6, label: "Tailwind", icon: "/img/tailwind.svg" },
//   { id: 7, label: "Sass", icon: "/img/sass.svg" },
//   { id: 8, label: "Git", icon: "/img/git.svg" },
// ];
const cards = [
  {
    title: "Javascript",
    src: "/img/js.png",
    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          JavaScript, often abbreviated as JS, is a programming language and
          core technology of the Web, alongside HTML and CSS. 99% of websites
          use JavaScript on the client side for webpage behavior. Web browsers
          have a dedicated JavaScript engine that executes the client code.
          These engines are also utilized in some servers and a variety of apps.
          The most popular runtime system for non-browser usage is Node.js.
        </p>
      );
    },
  },
  {
    title: "Typescript",
    src: "/img/typescript.png",

    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          TypeScript is a free and open-source high-level programming language
          developed by Microsoft that adds static typing with optional type
          annotations to JavaScript. It is designed for the development of large
          applications and transpiles to JavaScript.
        </p>
      );
    },
  },

  {
    title: "React Js",
    src: "/img/reactjs.png",

    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library that aims to make building user
          interfaces based on components more seamless. It is maintained by Meta
          (formerly Facebook) and a community of individual developers and
          companies.
        </p>
      );
    },
  },
  {
    title: "Next Js",
    src: "/img/nextjs.svg",

    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Next.js is an open-source web development framework created by the
          private company Vercel providing React-based web applications with
          server-side rendering and static rendering.
        </p>
      );
    },
  },
  {
    title: "Bootstrap",
    src: "/img/bootstrap.png",

    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS
          framework directed at responsive, mobile-first front-end web
          development. It contains HTML, CSS and (optionally) JavaScript-based
          design templates for typography, forms, buttons, navigation, and other
          interface components.
        </p>
      );
    },
  },
  {
    title: "Tailwind",
    src: "/img/tailwind.svg",

    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Tailwind CSS is an open-source CSS framework. Unlike other frameworks,
          like Bootstrap, it does not provide a series of predefined classes for
          elements such as buttons or tables. Instead, it creates a list of
          utility CSS classes that can be used to style each element by mixing
          and matching.
        </p>
      );
    },
  },
  {
    title: "Sass",
    src: "/img/sass.svg",

    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Sass (short for syntactically awesome style sheets) is a preprocessor
          scripting language that is interpreted or compiled into Cascading
          Style Sheets (CSS). SassScript is the scripting language itself.
        </p>
      );
    },
  },
  {
    title: "Git",
    src: "/img/git.svg",

    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Git is a distributed version control system that tracks versions of
          files. It is often used to control source code by programmers who are
          developing software collaboratively.
        </p>
      );
    },
  },
];

export const Skills = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div
        id="skills"
        className="mt-5 mx-auto max-w-[1240px] bg-neutral-950 p-10 rounded-md select-none"
      >
        <div className="flex flex-col justify-center items-center">
          <Button className="mb-3">Here is my skills</Button>
          <p className="mb-6 text-center">
            The skills, tools, and technologies I am really good at:
          </p>
        </div>
        <div>
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0  grid place-items-center z-[100] ">
                <motion.div
                  style={{ margin: "0 30px" }}
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className=" rounded-lg max-w-[500px]  md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl "
                >
                  <motion.div
                    layoutId={`image-${active.title}-${id}`}
                    className="flex justify-center "
                  >
                    <Image
                      priority
                      width={200}
                      height={200}
                      src={active.src}
                      alt={active.title}
                      className="flex justify-center items-center text-center rounded-2xl p-2"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-bold text-neutral-700 dark:text-neutral-200"
                        >
                          {active.title}
                        </motion.h3>
                      </div>
                    </div>
                    <div className="pt-1 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-full md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul
            style={{ width: "100%" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full"
          >
            {cards.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="bg-neutral-800 justify-center  p-4 flex flex-col md:flex-row  items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex  gap-4 flex-col">
                  <motion.div
                    layoutId={`image-${card.title}-${id}`}
                    className="flex justify-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-14 w-fit md:h-14 md:w-fit rounded-lg object-cover object-top flex justify-center items-center"
                    />
                  </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center"
                    >
                      {card.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
