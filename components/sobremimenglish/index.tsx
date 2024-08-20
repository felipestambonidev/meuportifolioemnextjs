import sobremimeng from "@/data/sobremim/sobremimeng.json";

export default function SobreMimEng() {
  return (
    <div
      className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg text-white"
      id="sobre-mim"
    >
      {sobremimeng.map((sobremimfeeng, index) => (
        <div>
          <h1 className="lg:text-4xl xs:text-3xl">{sobremimfeeng.title}</h1>
          <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
          <p className="lg:text-xl xs:text-[17px] font-light">{sobremimfeeng.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
