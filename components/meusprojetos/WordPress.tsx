import Image from "next/image";
import React from "react";

const ProjetosWordPress: React.FC = () => {
  const projetos = [
    {
      nome: "Eworks Labs",
      link: "https://eworkslabs.com",
      imagem: "/img/fotosprojetoswordpress/eworks.png",
    },
    {
      nome: "Legend Wealth",
      link: "https://legendwealth.com.br",
      imagem: "/img/fotosprojetoswordpress/legendwealth.png",
    },
    {
      nome: "Legend Capital",
      link: "https://legendcapital.com.br",
      imagem: "/img/fotosprojetoswordpress/legend.png",
    },
    {
      nome: "Legend Invest",
      link: "https://legendinvest.com.br",
      imagem: "/img/fotosprojetoswordpress/legendinvest.png",
    },
    {
      nome: "Legend Assets",
      link: "https://legendassets.com.br",
      imagem: "/img/fotosprojetoswordpress/legendassets.png",
    },
  ];

  return (
    <div
      className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg text-white"
      id="wordpress"
    >
      <h1 className="lg:text-4xl xs:text-3xl">Wordpress</h1>
      <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="relative bg-[#1E1E1E] p-4 rounded-lg hover:bg-orange-500 transition-colors duration-300"
          >
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                className="rounded-lg mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-lg font-semibold text-center lg:text-start">
                {projeto.nome}
              </h3>
              <p className="text-sm text-center lg:text-start">
                {projeto.link}
              </p>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetosWordPress;

// import React from 'react';

// const ProjetosWordPress: React.FC = () => {
//   const projetos = [
//     { nome: 'Eworks Labs', link: 'https://eworkslabs.com' },
//     { nome: 'Legend Wealth', link: 'https://legendwealth.com.br' },
//     { nome: 'Legend Capital', link: 'https://legendcapital.com.br' },
//     { nome: 'Legend Invest', link: 'https://legendinvest.com.br' },
//     { nome: 'Legend Assets', link: 'https://legendassets.com.br' },
//   ];

//   return (
//     <div className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg text-white">
//       <h1 className="lg:text-4xl xs:text-3xl">Wordpress</h1>
//       <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {projetos.map((projeto, index) => (
//           <div
//             key={index}
//             className="relative bg-[#232323] p-4 rounded-lg hover:bg-orange-500 transition-colors duration-300"
//           >
//             <a href={projeto.link} target="_blank" rel="noopener noreferrer">
//               <h3 className="text-lg font-semibold">{projeto.nome}</h3>
//               <p className="text-sm">{projeto.link}</p>
//               <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjetosWordPress;
