import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-8 flex justify-between items-center relative">
      <div className="flex-grow"></div>
      <ul className="hidden md:flex items-center space-x-10">
        <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Sobre Mim</Link></li>
        <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Tecnologias</Link></li>
        <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Meus Projetos</Link></li>
        <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Entre em contato</Link></li>
      </ul>
      <div className="flex items-center">
        <div className="relative flex items-center ml-4">
          <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
            <Image
              src="/img/icons/brazil.png"
              alt="Language selector"
              width={15}
              height={15}

            />
            <span className={`ml-2 transform transition-transform text-white text-[10px] ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-6 right-0 bg-[#474747] shadow-lg rounded">
              <ul className="text-black">
                <li className="p-3 hover:bg-orange-500 text-white font-medium cursor-pointer" onClick={() => window.location.href = '/'}>Português</li>
                <li className="p-3 hover:bg-orange-500 text-white font-medium cursor-pointer" onClick={() => window.location.href = '/en'}>English</li>
              </ul>
            </div>
          )}
        </div>

        {/* Ícone de Menu Hamburguer */}
        <div className="ml-4 md:hidden" onClick={toggleMenu}>
          <div className="space-y-2 cursor-pointer">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>

      {/* Menu Hamburguer */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-black z-10 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center p-4">
          <span className="text-white text-xl" />
          <button onClick={toggleMenu} className="text-white text-3xl">
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-6 pl-4">
          <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Sobre Mim</Link></li>
          <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Tecnologias</Link></li>
          <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Meus Projetos</Link></li>
          <li><Link href="#" className="text-white text-xl font-light hover:text-orange-500">Entre em contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
