import Image from "next/image";
import React from "react";

const Tecnologias: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg">
        <h1 className="lg:text-4xl xs:text-3xl text-white">Tecnologias</h1>
        <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mt-10">
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/html.png"
            alt="HTML5"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/css3.png"
            alt="CSS3"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/js.png"
            alt="JavaScript"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/ts.png"
            alt="TypeScript"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/next.png"
            alt="Node.js"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/react.png"
            alt="React"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/git.png"
            alt="Git"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/github.png"
            alt="GitHub"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/figma.png"
            alt="Webpack"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/wordpress.png"
            alt="WordPress"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-center bg-[#232323] rounded-md p-2 sm:p-3 md:p-4">
          <Image
            src="/img/tecnologias/elementor.png"
            alt="Elementor"
            className="w-6 sm:w-8 md:w-10"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
