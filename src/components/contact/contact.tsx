"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Copy, Check } from "lucide-react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import Link from "next/link";

export const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      id="contact"
      className="mt-5 mx-auto max-w-[1240px] bg-neutral-950 p-6 md:p-10 rounded-md text-center text-gray-300"
    >
      <div className="flex flex-col justify-center items-center">
        <Button className="mb-4 text-lg">Get In Touch</Button>
        <p className="mb-6 text-base  max-w-2xl">
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text:lg md:text-2xl font-semibold">
            ✉️ jamshidbekrasulovuz@gmail.com
            <button onClick={() => handleCopy("reachsagarshah@gmail.com")}>
              {copied === "reachsagarshah@gmail.com" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 cursor-pointer hover:text-gray-400" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2 text-base md:text-xl font-semibold">
            📞 +998 93 205 97 77
            <button onClick={() => handleCopy("+91 8980500565")}>
              {copied === "+91 8980500565" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 cursor-pointer hover:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 text-2xl">
          <Link href={"https://github.com/Jamshidbek9777"}>
            <FaGithub className="cursor-pointer hover:text-gray-400" />
          </Link>
          <Link href={"https://t.me/Jamshidbek_Rasulov"}>
            <FaTelegram className="cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};
