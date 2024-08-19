import Image from "next/image";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Tecnologias: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg" id="tecnologias">
      <h1 className="lg:text-4xl xs:text-3xl text-white">Tecnologias</h1>
      <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mt-10">
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaHtml5 className="text-[#f15b29] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaCss3Alt className="text-[#1775BB] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <IoLogoJavascript className="text-[#F7E025] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <SiTypescript className="text-[#1775BB] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaNodeJs className="text-[#539e43] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <RiNextjsFill className="text-black text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaReact className="text-[#61dafb] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaGitAlt className="text-[#F05033] text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <FaGithub className="text-black text-[40px]" />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/figma.png"
            alt="Webpack"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/wordpress.png"
            alt="WordPress"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/elementor.png"
            alt="Elementor"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
