"use client";

import { Experience, NavbarComponent, Projects, Skills } from "@/components";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { Dot, Github, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div
        id="about"
        className="mx-auto max-w-[1240px] h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
      >
        <div className="mx-auto p-4">
          <h1 className="mb-10 relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Jamshidbek Rasulov
          </h1>
          <p className="text-neutral-500 max-w-xl text-md relative z-10">
            Im a full frontend developer (React.js) with a focus on creating
            (and occasionally designing) exceptional digital experiences that
            are fast, accessible, visually appealing, and responsive. Even
            though I have been creating web applications for over 1 years, I
            still love it as if it was something new.
          </p>
          <div className="flex gap-2 mt-5 text-neutral-500 relative z-10">
            <MapPin color="#006FEE" />
            <p>Tashkent, Uzbekistan</p>
          </div>
          <div className="flex gap-2 mt-2 text-neutral-500 relative z-10">
            <Dot color="green" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="text-center flex gap-5 mt-10 relative z-10">
          <Link
            href="https://github.com/Jamshidbek9777"
            rel="noopener noreferrer"
          >
            <Github />
          </Link>
          <Link href="https://t.me/Jamshidbek_Rasulov">
            <LiaTelegramPlane size={27} />
          </Link>
          <Link href="https://www.instagram.com/jamshidbek____04">
            <Instagram />
          </Link>
        </div>
        <BackgroundBeams />
      </div>
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
