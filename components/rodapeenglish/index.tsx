import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

export default function RodapeEng() {
    return (
        <div className="bg-[#202020] mt-20 p-5 flex flex-col items-center">
          <div>
            <h1 className="text-white text-center">
              Copyright © 2024 - Felipe Stamboni – All rights reserved.
            </h1>
          </div>
          <div className="flex mt-3 gap-2 justify-center">
            <RiNextjsFill className="text-3xl" />
            <RiTailwindCssFill className="text-3xl text-[#20b0b9]" />
          </div>
        </div>
      );
      
}
