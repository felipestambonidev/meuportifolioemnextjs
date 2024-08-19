import Image from "next/image";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

export default function PerfilEng() {
  return (
    <div className="flex flex-col text-white items-center font-sans">
      <div className="mt-5 flex flex-col items-center">
        <Image
          src="/img/fotodeperfil/minhafotodeperfil.png"
          alt="Minha foto de perfil"
          height={110}
          width={110}
        />
        <h1 className="lg:text-4xl xs:text-3xl font-semibold text-center">
          Hello, I am <span className="text-orange-500">Felipe Stamboni.</span>
        </h1>
        <h2 className="lg:text-3xl xs:text-2xl text-center">
          Front-End Developer
        </h2>
        <p className="text-center lg:text-xl xs:text-[17px] font-light mt-1 w-96 ">
          My first experience as a Front-End developer was at Eworks Labs in
          Munich, DE. Where I was interning remotely, I have a great passion for
          computing, I enjoy designing projects and creating intuitive and
          dynamic user experiences.
        </p>
        <div className="flex space-x-2 justify-center pt-5">
          <button className="bg-orange-500 text-white lg:text-[15px] flex md:text-[12px] py-2 px-4 rounded">
            Download my CV
            <div className="pl-3 pt-1 sm:pt-0 justify-center text-[17px]">
              <FaRegFilePdf />
            </div>
          </button>
          <button className="bg-orange-500 text-white py-2 lg:text-[15px] md:text-[12px] flex px-4 rounded">
            <Link href="https://github.com/felipestambonidev">My GitHub</Link>
            <div className="pl-3 pt-1 sm:pt-0 justify-center text-[17px]">
              <VscGithubInverted />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}