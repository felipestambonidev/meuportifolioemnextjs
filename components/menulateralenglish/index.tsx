import Image from "next/image";

export default function MenuLateralEng() {
  return (
    <div className="relative h-full lg:w-1/4 p-6 text-white flex flex-col items-center font-sans lg:fixed">
      <div className="mt-1 flex flex-col items-center">
      <Image
          src="/img/fotodeperfil/minhafotodeperfil.png"
          alt="Minha foto de perfil"
          height={110}
          width={110}
        />
        <h1 className="sm:text-[30px] xs:text-[23px] font-semibold text-center">
          Hello, I am <span className="text-orange-500">Felipe Stamboni.</span>
        </h1>
        <h2 className="sm:text-[25px] xs:text-[20px] text-center">Front-End Developer</h2>
        <p className="text-center text-[17px] font-light mt-1">
         My first experience as a Front-End developer was at Eworks Labs in Munich, DE. Where I was interning remotely, I have a great passion for computing, I enjoy designing projects and creating intuitive and dynamic user experiences.
        </p>
        <div className="flex space-x-2 justify-center pt-5">
          <button className="bg-orange-500 text-white lg:text-[13px] flex md:text-[12px] py-2 px-4 rounded">
            Download my CV
            <div className="pl-3 justify-center text-[17px]">
              
            </div>
          </button>
          <button className="bg-orange-500 text-white py-2 lg:text-[13px] flex px-4 rounded">
            My GitHub
            <div className="pl-3 justify-center text-[17px]">
              
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}